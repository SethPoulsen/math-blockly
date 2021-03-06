// Set up new shape & colour for angle.
// Use the same shape as Boolean, but a different colour.
Blockly.BlockSvg.typeVarShapes_["Angle"] = Blockly.BlockSvg.typeVarShapes_["Boolean"];
Blockly.BlockSvg.typeVarShapes_["Angle"].blockColour = 160;  // Aquamarine hue



/* Standard trignometric functions */
Blockly.Blocks['trig_functions'] = {
  init: function() {
    this.appendValueInput("ANGLE")
        .setCheck("Angle")
        .appendField( new Blockly.FieldDropdown( [["sin","SIN"],["cos","COS"],["tan","TAN"],["sec","SEC"],["cosec","COSEC"],["cot","COT"]] ), "FUNCTION" );
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColourByType();
    this.setTooltip('Sine of a given angle');
    this.setHelpUrl();
  }
};

Blockly.Blocks['trig_sin'] = {
  init: function() {
    this.appendValueInput("ANGLE")
        .setCheck("Angle")
        .appendField("sin");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColourByType();
    this.setTooltip('Sine of a given angle');
    this.setHelpUrl();
  }
};

Blockly.Blocks['trig_cos'] = {
  init: function() {
    this.appendValueInput("ANGLE")
        .setCheck("Angle")
        .appendField("cos");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColourByType();
    this.setTooltip('Cosine of a given angle');
    this.setHelpUrl();
  }
};

Blockly.Blocks['trig_tan'] = {
  init: function() {
    this.appendValueInput("ANGLE")
        .setCheck("Angle")
        .appendField("tan");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColourByType();
    this.setTooltip('Tan (tangent) of a given angle');
    this.setHelpUrl();
  }
};

Blockly.Blocks['trig_sec'] = {
  init: function() {
    this.appendValueInput("ANGLE")
        .setCheck("Angle")
        .appendField("sec");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColourByType();
    this.setTooltip('Secant of a given angle');
    this.setHelpUrl();
  }
};

Blockly.Blocks['trig_cosec'] = {
  init: function() {
    this.appendValueInput("ANGLE")
        .setCheck("Angle")
        .appendField("cosec");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColourByType();
    this.setTooltip('Cosecant of a given angle');
    this.setHelpUrl();
  }
};

Blockly.Blocks['trig_cot'] = {
  init: function() {
    this.appendValueInput("ANGLE")
        .setCheck("Angle")
        .appendField("cot");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColourByType();
    this.setTooltip('Cotan (cotangent) of a given angle');
    this.setHelpUrl();
  }
};

/* Inverse trig functions */
Blockly.Blocks['trig_inverse'] = {
  init: function() {
    this.appendValueInput("NUMBER")
        .setCheck("Number")
        .appendField( new Blockly.FieldDropdown( [["arcsin","ARCSIN"],["arccos","ARCCOS"],["arctan","ARCTAN"],["arcsec","ARCSEC"],["arccosec","ARCCOSEC"],["arccot","ARCCOT"]] ), "FUNCTION" );
    this.setInputsInline(true);
    this.setOutput(true, "Angle");
    this.setColourByType();
    this.setTooltip('Arcsin - Inverse of sin function');
    this.setHelpUrl();
  }
};


Blockly.Blocks['trig_arcsin'] = {
  init: function() {
    this.appendValueInput("NUMBER")
        .setCheck("Number")
        .appendField("arcsin");
    this.setInputsInline(true);
    this.setOutput(true, "Angle");
    this.setColourByType();
    this.setTooltip('Arcsin - Inverse of sin function');
    this.setHelpUrl();
  }
};

Blockly.Blocks['trig_arccos'] = {
  init: function() {
    this.appendValueInput("NUMBER")
        .setCheck("Number")
        .appendField("arccos");
    this.setInputsInline(true);
    this.setOutput(true, "Angle");
    this.setColourByType();
    this.setTooltip('Arccos - Inverse of sin function');
    this.setHelpUrl();
  }
};

Blockly.Blocks['trig_arctan'] = {
  init: function() {
    this.appendValueInput("NUMBER")
        .setCheck("Number")
        .appendField("arctan");
    this.setInputsInline(true);
    this.setOutput(true, "Angle");
    this.setColourByType();
    this.setTooltip('Arctan - Inverse of tan function');
    this.setHelpUrl();
  }
};


/* Angle variable and literal blocks */
Blockly.Blocks['angle_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField( new Blockly.FieldDropdown( [["θ","θ"],["φ","φ"],["α","α"],["β","β"],["γ","γ"]] ), "VAR" );
    this.setInputsInline(true);
    this.setOutput(true, "Angle");
    this.setColourByType();
    this.setTooltip('An angle variable');
    this.setHelpUrl();
  }
};


Blockly.Blocks['angle_theta'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("θ");
    this.setInputsInline(true);
    this.setOutput(true, "Angle");
    this.setColourByType();
    this.setTooltip('An angle θ (theta)');
    this.setHelpUrl();
  }
};

Blockly.Blocks['angle_phi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("φ");
    this.setInputsInline(true);
    this.setOutput(true, "Angle");
    this.setColourByType();
    this.setTooltip('An angle φ (phi)');
    this.setHelpUrl();
  }
};

Blockly.Blocks['angle_alpha'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("α");
    this.setInputsInline(true);
    this.setOutput(true, "Angle");
    this.setColourByType();
    this.setTooltip('An angle α (alpha)');
    this.setHelpUrl();
  }
};

Blockly.Blocks['angle_beta'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("β");
    this.setInputsInline(true);
    this.setOutput(true, "Angle");
    this.setColourByType();
    this.setTooltip('An angle β (beta)');
    this.setHelpUrl();
  }
};

Blockly.Blocks['angle_exact_radian'] = {
  init: function() {
    this.appendDummyInput()
        .appendField( new Blockly.FieldDropdown( [["0","0"],["π/6","π/6"],["π/4","π/4"],["π/3","π/3"],["π/2","π/2"],["π","π"],["2π","2π"]] ), "ANGLE" );
    this.setInputsInline(true);
    this.setOutput(true, "Angle");
    this.setColourByType();
    this.setTooltip('An angle (in radians)'); // Todo - dynamic tooltip with conversion to degrees
    this.setHelpUrl();
  }
};

Blockly.Blocks['angle_degrees'] = {
  init: function() {
    this.appendDummyInput()
        .appendField( new Blockly.FieldTextInput( "45", Blockly.FieldTextInput.numberValidator ) )
        .appendField( "°" );
    this.setInputsInline(true);
    this.setOutput(true, "Angle");
    this.setColour( 290 ); /* Purple hue */
    this.setTooltip('An angle (in degrees)');
    this.setHelpUrl();
  }
};

Blockly.Blocks['angle_pi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("π");
    this.setInputsInline(true);
    this.setOutput(true, "Angle");
    this.setColourByType();
    this.setTooltip('The angle π (180°)');
    this.setHelpUrl();
  }
};

Blockly.Blocks['angle_2pi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("2π");
    this.setInputsInline(true);
    this.setOutput(true, "Angle");
    this.setColourByType();
    this.setTooltip('The angle 2π (360°)');
    this.setHelpUrl();
  }
};

Blockly.Blocks['angle_pi/2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("π/2");
    this.setInputsInline(true);
    this.setOutput(true, "Angle");
    this.setColourByType();
    this.setTooltip('The angle π/2 (90°)');
    this.setHelpUrl();
  }
};

