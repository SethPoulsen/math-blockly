/** Based on Blockly field_image.js **/

'use strict';

goog.provide('Blockly.FieldMathJax');

goog.require('Blockly.Field');
goog.require('goog.dom');
goog.require('goog.math.Size');
goog.require('goog.userAgent');


/**
 * Class for displaying a mathematical expression rendered by MathJax.
 * @param {string} src A mathematical expression, in latex, asciimath or any other format supported by MathJax
 * @param {string=} opt_alt Optional alt text for when block is collapsed.
 * @extends {Blockly.Field}
 * @constructor
 */
Blockly.FieldMathJax = function(src, opt_alt) {
  this.sourceBlock_ = null;
  this.text_ = opt_alt || '';
  this.src_ = src;
};
goog.inherits(Blockly.FieldMathJax, Blockly.Field);

/**
 * Rectangular mask used by Firefox.
 * @type {Element}
 * @private
 */
Blockly.FieldMathJax.prototype.rectElement_ = null;

/**
 * Editable fields are saved by the XML renderer, non-editable fields are not.
 */
Blockly.FieldMathJax.prototype.EDITABLE = false;

/**
 * Install this field on a block.
 * @param {!Blockly.Block} block The block containing this text.
 */
Blockly.FieldMathJax.prototype.init = function(block) {
  if (this.sourceBlock_) {
    // Field has already been initialized once.
    return;
  }
  this.sourceBlock_ = block;
  // Build the DOM.
  this.fieldGroup_ = Blockly.createSvgElement('g', {}, null);
  if (!this.visible_) {
    this.fieldGroup_.style.display = 'none';
  }
  
  this.foreignElement_ = Blockly.createSvgElement('foreignObject',
      {}, this.fieldGroup_);
  this.setValue(this.src_);
  if (goog.userAgent.GECKO) {
    // Due to a Firefox bug which eats mouse events on image elements,
    // a transparent rectangle needs to be placed on top of the image.
    // TODO: Check if this bug holds for foreignelement also.
    this.rectElement_ = Blockly.createSvgElement('rect',
        {'fill-opacity': 0}, this.fieldGroup_);
  }
  block.getSvgRoot().appendChild(this.fieldGroup_);

  // Configure the field to be transparent with respect to tooltips.
  var topElement = this.rectElement_ || this.foreignElement_;
  topElement.tooltip = this.sourceBlock_;
  Blockly.Tooltip.bindMouseEvents(topElement);
};

Blockly.FieldMathJax.prototype.setSize_ = function(width, height) {
  this.width_ = width;
  this.height_ = height;
  this.size_ = new goog.math.Size(this.width_,
    this.height_ + 2 * Blockly.BlockSvg.INLINE_PADDING_Y);
  
  this.foreignElement_.setAttribute("width", width + "px");
  this.foreignElement_.setAttribute("height", width + "px");
  
  if( this.rectElement_ ) {
    this.rectElement_.setAttribute("width", width + "px");
    this.rectElement_.setAttribute("height", height + "px");
  }
};

/**
 * Set the latex/asciimath source of the expression.
 * @param {?string} src New source.
 * @override
 */
Blockly.FieldMathJax.prototype.setValue = function(src) {
  if (src === null) {
    // No change if null.
    return;
  }
  this.src_ = src;
  if( !this.sourceBlock_ ) {
    /* Block hasn't been initialised yet. Store string for later. */
    return;
  }

  if( !this.mathDiv_ ) {
    /* Temporarily display latex source */
    this.mathDiv_ = document.createElement("div");
    this.mathDiv_.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
    this.mathDiv_.innerHTML = src;
    this.mathDiv_.style.visibility = "hidden";
    this.mathDiv_.style.position = "absolute";
    this.mathDiv_.style.margin = "0";
    this.mathDiv_.style.fontWeight = "bold";
    document.body.appendChild( this.mathDiv_ );
    this.setSize_( this.mathDiv_.offsetWidth, this.mathDiv_.offsetHeight );
    this.foreignElement_.appendChild( this.mathDiv_ );
    this.mathDiv_.style.visibility = "visible";
    this.mathDiv_.style.position = "relative";
  }
  
  var newDiv = document.createElement("div");
  newDiv.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
//  newDiv.innerHTML = "\\(\\displaystyle " + src + " \\)";  /* Allow Latex only */
  newDiv.innerHTML = "\\/( " + src + " \\/)";  /* Allow Latex and asciimath */
  
  // Temporarily add div to document so that we can get its size.
  // Set visibility to hidden so it will not display.
  newDiv.style.visibility = "hidden";
  newDiv.style.position = "absolute";
  document.body.appendChild( newDiv );  
  
  var t = this;
  var callback = function() {
    /* Called when MathJax has finished rendering math expression */
    t.setSize_( newDiv.offsetWidth, newDiv.offsetHeight );
    
    goog.dom.removeNode( t.mathDiv_ );
    t.foreignElement_.appendChild( newDiv );
    newDiv.style.position = "relative";
    newDiv.style.visibility = "visible";
    t.mathDiv_ = newDiv;
    
    /* Re-render block in case size has changed */
    t.sourceBlock_.render();
  };
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, newDiv, callback]);
};

/**
 * Get the latex/asciimath source of this expression.
 * @return {string} Current text.
 * @override
 */
Blockly.FieldMathJax.prototype.getValue = function() {
  return this.src_;
};

/**
 * Dispose of all DOM objects belonging to this text.
 */
Blockly.FieldMathJax.prototype.dispose = function() {
  goog.dom.removeNode(this.fieldGroup_);
  this.fieldGroup_ = null;
  this.foreignElement_ = null;
  this.mathDiv_ = null;
  this.rectElement_ = null;
};

/**
 * Change the tooltip text for this field.
 * @param {string|!Element} newTip Text for tooltip or a parent element to
 *     link to for its tooltip.
 */
Blockly.FieldMathJax.prototype.setTooltip = function(newTip) {
  var topElement = this.rectElement_ || this.foreignElement_;
  topElement.tooltip = newTip;
};

/**
 * Set the alt text of this field.
 * @param {?string} alt New alt text.
 * @override
 */
Blockly.FieldMathJax.prototype.setText = function(alt) {
  if (alt === null) {
    // No change if null.
    return;
  }
  this.text_ = alt;
};

/**
 * Field is fixed width, no need to render.
 * @private
 */
 // TODO: Implement this?
Blockly.FieldMathJax.prototype.render_ = function() {
  // NOP
};