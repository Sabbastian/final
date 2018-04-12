let search_type = 'name',
    choices_present = false;

function selectType(type) {
  let type_selector = '#' + type;

  document.getElementsByClassName('buttonon')[0].className = 'buttonoff';
  document.getElementById(type).className = 'buttonon';
  search_type = type;
};

function searchInst(type) {
  if (choices_present) {
    $("#choices").empty();
    choices_present = false;
  };

  $.get("http://localhost:3000/instruments", function(results) {
    let r = results.rows;

    if (type == 'name') {
      for (let i=0; i<=r.length-1; i++) {
        if (type == 'name' && r[i].name == $('#input').val()) {
          displayResult(r[i]);
          break;
        }
      };
    } else if (type == 'range') {
      searchRange(r);
    } else {
      searchFamily(r);
    }
  });
}

function searchFamily(inst_results) {
  $.get("http://localhost:3000/family", function(results) {
    let f_r = results.rows,
        i_r = inst_results,
        list = [];

    for (let i=0; i<=i_r.length-1; i++) {
      for (let z=0; z<=f_r.length-1; z++) {
        if (i_r[i].family_id == f_r[z].id && f_r[z].name == $('#input').val()) {
          list.push(i_r[i].name);
          choices_present = true;
        }
      }
    }

    for (let i=0; i<=list.length-1; i++) {
      let choice_num = 'choice_' + i;
      let node = "<button id='" + choice_num + "' onclick='selectChoice(" + choice_num + ")' class='choicebuttonoff'>" + list[i] + "</button> "
      $("#choices").append(node);
    }

    if(choices_present) { $("#choices").append("<br><br>"); };
  });
}

function searchRange(inst_results) {
  let r = inst_results,
      input = $('#input').val(),
      list = [];

  for (let i=0; i<=r.length-1; i++) {
    if(noteToNumber(input) >= noteToNumber(r[i].range_min) && noteToNumber(input) <= noteToNumber(r[i].range_max)) {
      list.push(r[i].name);
      choices_present = true;
    }
  }

  for (let i=0; i<=list.length-1; i++) {
    let choice_num = 'choice_' + i;
    let node = "<button id='" + choice_num + "' onclick='selectChoice(" + choice_num + ")' class='choicebuttonoff'>" + list[i] + "</button> "
    $("#choices").append(node);
  }

  if(choices_present) { $("#choices").append("<br><br>"); };
}

function selectChoice(node_id) {
  $.get("http://localhost:3000/instruments", function(results) {
    let r = results.rows;

    $('.choicebuttonon').attr('class', 'choicebuttonoff');

    for (let i=0; i<=r.length-1; i++) {
      if (r[i].name == $(node_id).html()) {
        displayResult(r[i]);
        $(node_id).attr('class', 'choicebuttonon');
        break;
      }
    }
  });
};

function selectTechChoice(node_id) {
  $.get("http://localhost:3000/techniques", function(results) {
    let r = results.rows;

    $('.techbuttonon').attr('class', 'techbuttonoff');

    for (let i=0; i<=r.length-1; i++) {
      if (r[i].name == $(node_id).html()) {
        $('#i_tech_info').html(r[i].description);
        $(node_id).attr('class', 'techbuttonon');
        break;
      }
    }
  });
};

function displayTechChoice (inst_result) {
  $.get("http://localhost:3000/instruments", function(results) {
    let r = results.rows;
    $.get("http://localhost:3000/techniques", function(results) {
      let t = results.rows;
      $.get("http://localhost:3000/tech_mapping", function(results) {
        let tm = results.rows,
            list = [];

        for (let i=0; i<=tm.length-1; i++) {
          for (let z=0; z<=r.length-1; z++) {
            for (let q=0; q<=t.length-1; q++) {
              if (tm[i].inst_id == r[z].id && tm[i].tech_id == t[q].id && r[z].id == inst_result.id) {
                list.push(t[q].name);
              }
            }
          }
        }

        if (list.length >= 1) { $('#i_tech_header').html('<b>Techniques:</b>'); };

        for (let i=0; i<=list.length-1; i++) {
          let t_choice_num = 't_choice_' + i;
          let node = "<button id='" + t_choice_num + "' onclick='selectTechChoice(" + t_choice_num + ")' class='choicebuttonoff'>" + list[i] + "</button> "
          $("#tech_choices").append(node);
        }
      });
    });
  });
}

function displayResult(inst_result) {
    $('#i_tech_header').empty();
    $('#tech_choices').empty();
    $('#i_tech_info').empty();

    $('#i_img').attr("src", inst_result.instr_img);
    $('#i_img').width(120);
    $('#i_img').height(120);
    $('#i_name').html('Instrument Name: ' + inst_result.name);

    $.get("http://localhost:3000/family", function(results) {
      let r = results.rows;

      for (i=0; i<=r.length-1; i++) {
        if (r[i].id == inst_result.family_id) {
          $('#i_family').html('Family: ' + r[i].name);
          break;
        }
      }
    });

    $.get("http://localhost:3000/class", function(results) {
      let r = results.rows;

      for (i=0; i<=r.length-1; i++) {
        if (r[i].id == inst_result.class_id) {
          $('#i_class').html('Classification: ' + r[i].name);
          break;
        }
      }
    });

    $.get("http://localhost:3000/clef", function(results) {
      let r = results.rows;

      for (i=0; i<=r.length-1; i++) {
        if (r[i].id == inst_result.clef_id) {
          $('#i_clef').html('Clef: ' + r[i].name);
          break;
        }
      }
    });

    $('#i_range').html('Written Range: ' + inst_result.range_min + '-' + inst_result.range_max);
    $('#i_transp').html('Transposition: ' + inst_result.transp);
    displayTechChoice(inst_result);
};

function noteToNumber(note) {
  let note_checker = "CDEFGAB",
      note_num,
      note_add = 0;

  for (let i=0; i<=note_checker.length-1; i++) {
    if (note[0] == note_checker[i]) {
      note_num = i;
    }
  }

  if (note_num >= 1) { note_add++ };
  if (note_num >= 2) { note_add++ };
  if (note_num >= 4) { note_add++ };
  if (note_num >= 5) { note_add++ };
  if (note_num >= 6) { note_add++ };

  note_num += note_add;

  if (note[1] == 'b') { note_num-- };
  if (note[1] == '#') { note_num++ };
  if (note_num <= -1) { note_num = 11; };
  if (note_num >= 12) { note_num = 0; };

  if (note[1] != 'b' && note[1] != '#') {
    note_num += note[1] * 12;
  } else {
    note_num += note[2] * 12;
  }

  return note_num;
}

console.log('Yatta!');
