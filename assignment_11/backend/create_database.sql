createdb -U sabbastian inst_guide

create table family (
  id            serial primary key,
  name          varchar(20) not null
);

create table class (
  id            serial primary key,
  name          varchar(20) not null
);

create table clef (
  id            serial primary key,
  name          varchar(12) not null
);

create table instruments (
  id            serial primary key,
  name          varchar(30) not null,
  instr_img     varchar(200),
  family_id     integer not null references family(id),
  class_id      integer not null references class(id),
  clef_id       integer not null references clef(id),
  range_min     varchar(5),
  range_max     varchar(5),
  range_img     varchar(200),
  transp        varchar(30),
  audio_sample  varchar(200),
  add_info      varchar(300)
);

create table techniques (
  id            serial primary key,
  name          varchar(30) not null,
  description   varchar(300),
  notation_img  varchar(200)
);

create table tech_mapping (
  id            serial primary key,
  inst_id       integer not null references instruments(id),
  tech_id       integer not null references techniques(id)
);

INSERT INTO family (name) VALUES ('String');
INSERT INTO family (name) VALUES ('Woodwind');
INSERT INTO family (name) VALUES ('Brass');
INSERT INTO family (name) VALUES ('Percussion');
INSERT INTO family (name) VALUES ('Keyboard');

INSERT INTO class (name) VALUES ('Chordophone');
INSERT INTO class (name) VALUES ('Aerophone');
INSERT INTO class (name) VALUES ('Membranophone');

INSERT INTO clef (name) VALUES ('Treble');
INSERT INTO clef (name) VALUES ('Bass');
INSERT INTO clef (name) VALUES ('Alto');
INSERT INTO clef (name) VALUES ('Tenor');
INSERT INTO clef (name) VALUES ('Grand Staff');

INSERT INTO instruments (name, instr_img, family_id, class_id, clef_id, range_min, range_max, transp) VALUES ('Violin', 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Violin_VL100.png', '1', '1', '1', 'G3', 'A7', 'N/A');
INSERT INTO instruments (name, instr_img, family_id, class_id, clef_id, range_min, range_max, transp) VALUES ('Viola', 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Bratsche.jpg', '1', '1', '3', 'C3', 'E6', 'N/A');
INSERT INTO instruments (name, instr_img, family_id, class_id, clef_id, range_min, range_max, transp) VALUES ('Cello', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Cello_front_side.png/395px-Cello_front_side.png', '1', '1', '2', 'C2', 'C6', 'N/A');
INSERT INTO instruments (name, instr_img, family_id, class_id, clef_id, range_min, range_max, transp) VALUES ('Contrabass', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/AGK_bass1_full.jpg/800px-AGK_bass1_full.jpg', '1', '1', '2', 'C2', 'C5', 'One octave lower');
INSERT INTO instruments (name, instr_img, family_id, class_id, clef_id, range_min, range_max, transp) VALUES ('Flute', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Western_concert_flute_%28Yamaha%29.jpg/800px-Western_concert_flute_%28Yamaha%29.jpg', '2', '2', '1', 'C4', 'D7', 'N/A');
INSERT INTO instruments (name, instr_img, family_id, class_id, clef_id, range_min, range_max, transp) VALUES ('Oboe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Oboe_modern.jpg/1280px-Oboe_modern.jpg', '2', '2', '1', 'Bb3', 'A6', 'N/A');
INSERT INTO instruments (name, instr_img, family_id, class_id, clef_id, range_min, range_max, transp) VALUES ('Clarinet', 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Clarinet_construction.JPG', '2', '2', '1', 'E3', 'C7', 'Bb: Whole step lower');
INSERT INTO instruments (name, instr_img, family_id, class_id, clef_id, range_min, range_max, transp) VALUES ('Bassoon', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/FoxBassoon.png/800px-FoxBassoon.png', '2', '2', '2', 'Bb1', 'Eb5', 'N/A');
INSERT INTO instruments (name, instr_img, family_id, class_id, clef_id, range_min, range_max, transp) VALUES ('Trumpet', 'https://upload.wikimedia.org/wikipedia/commons/3/30/Trumpet_1.png', '3', '2', '1', 'G3', 'A7', 'Bb: Whole step lower');
INSERT INTO instruments (name, instr_img, family_id, class_id, clef_id, range_min, range_max, transp) VALUES ('French Horn', 'https://upload.wikimedia.org/wikipedia/commons/6/63/French_horn_front.png', '3', '2', '1', 'F#2', 'C6', 'F: Perfect 4th higher');
INSERT INTO instruments (name, instr_img, family_id, class_id, clef_id, range_min, range_max, transp) VALUES ('Trombone', 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Posaune.jpg', '3', '2', '2', 'E2', 'F5', 'N/A');
INSERT INTO instruments (name, instr_img, family_id, class_id, clef_id, range_min, range_max, transp) VALUES ('Tuba', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Yamaha_Bass_tuba_YFB-822.tif/lossy-page1-800px-Yamaha_Bass_tuba_YFB-822.tif.jpg', '3', '2', '2', 'D1', 'F4', 'N/A');
INSERT INTO instruments (name, instr_img, family_id, class_id, clef_id, range_min, range_max, transp) VALUES ('Piano', 'https://upload.wikimedia.org/wikipedia/commons/b/bd/D274.jpg', '5', '1', '5', 'A0', 'C8', 'N/A');
INSERT INTO instruments (name, instr_img, family_id, class_id, clef_id, range_min, range_max, transp) VALUES ('Timpani', 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Standard_timpani_setup.jpg', '4', '3', '2', 'D2', 'C4', 'N/A');

INSERT INTO techniques (name, description) VALUES ('Arco', 'The standard bowing technique used for stringed instruments.');
INSERT INTO techniques (name, description) VALUES ('Pizzicato', 'A technique where the player plucks a string with the flesh of their finger. It produces a short and percussive sound.');
INSERT INTO techniques (name, description) VALUES ('Col Legno', 'To strike the string with the backside of the bow. This produces a percussive sound along with the sound of the note.');
INSERT INTO techniques (name, description) VALUES ('Flutter-Tonguing', 'A technique where the player flutters their tongue while playing the instrument to produce a tremolo-like effect.');
INSERT INTO techniques (name, description) VALUES ('Trill', 'The act of alternating between two notes rapidly to produce a musical effect.');
INSERT INTO techniques (name, description) VALUES ('Legato', 'To play without reattacking consecutive notes so that the sound is continuous and fluid. On plucked/percussive instruments reattacking is necessary, so instead simply leave no gaps between notes.');
INSERT INTO techniques (name, description) VALUES ('Roll', 'A technique that achieves a sort of sustained sound made up of several rapid hits for the duration of the roll. The execution of this technique varies by instrument.');

INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('1', '1');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('1', '2');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('1', '3');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('1', '6');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('1', '5');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('2', '1');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('2', '2');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('2', '3');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('2', '6');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('2', '5');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('3', '1');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('3', '2');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('3', '3');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('3', '6');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('3', '5');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('4', '1');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('4', '2');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('4', '3');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('4', '6');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('4', '5');

INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('5', '6');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('5', '5');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('5', '4');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('6', '6');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('6', '5');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('6', '4');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('7', '6');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('7', '5');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('7', '4');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('8', '6');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('8', '5');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('8', '4');

INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('9', '6');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('9', '5');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('9', '4');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('10', '6');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('10', '5');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('10', '4');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('11', '6');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('11', '5');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('11', '4');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('12', '6');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('12', '5');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('12', '4');

INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('13', '6');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('13', '5');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('14', '6');
INSERT INTO tech_mapping (inst_id, tech_id) VALUES ('14', '7');
