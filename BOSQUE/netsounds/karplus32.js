/* ------------------------------------------------------------
author: "Grame"
copyright: "(c)GRAME 2006"
license: "BSD"
name: "karplus32"
version: "1.0"
Code generated with Faust 2.0.a54 (http://faust.grame.fr)
------------------------------------------------------------ */
/*
 faust2webaudio
 
 Primarily written by Myles Borins
 During the Spring 2013 offering of Music 420b with Julius Smith
 A bit during the Summer of 2013 with the help of Joshua Kit Clayton
 And finally a sprint during the late fall of 2013 to get everything working
 A Special thanks to Yann Orlarey and Stéphane Letz
 
 faust2webaudio is distributed under the terms the MIT or GPL2 Licenses.
 Choose the license that best suits your project. The text of the MIT and GPL
 licenses are at the root directory.
 
 Additional code : GRAME 2014
 
 */
 
'use strict';

var faust = faust || {};



function karplus32Module(global, foreign, buffer) {
	
	'use asm';
	
	var HEAP32 = new global.Int32Array(buffer);
	var HEAPF = new global.Float32Array(buffer);
	
	var imul = global.Math.imul;
	var log = global.Math.log;
	
	function fmodf(x, y) { x = +x; y = +y; return +(x % y); }
	function log10f(a) { a = +a; return +(+log(a) / +log(10.)); }
	
	function getNumInputs(dsp) {
		dsp = dsp | 0;
		return 0;
	}
	
	function getNumOutputs(dsp) {
		dsp = dsp | 0;
		return 2;
	}
	
	function classInit(dsp, samplingFreq) {
		dsp = dsp | 0;
		samplingFreq = samplingFreq | 0;
		
	}
	
	function instanceConstants(dsp, samplingFreq) {
		dsp = dsp | 0;
		samplingFreq = samplingFreq | 0;
		HEAP32[dsp + 0 >> 2] = (samplingFreq | 0);
		
	}
	
	function instanceResetUserInterface(dsp) {
		dsp = dsp | 0;
		HEAPF[dsp + 481696 >> 2] = 0.5;
		HEAPF[dsp + 481700 >> 2] = 1.;
		HEAPF[dsp + 481704 >> 2] = 0.100000001;
		HEAPF[dsp + 481708 >> 2] = 0.5;
		HEAPF[dsp + 481712 >> 2] = 0.;
		HEAPF[dsp + 481716 >> 2] = 128.;
		HEAPF[dsp + 481720 >> 2] = 128.;
		HEAPF[dsp + 481724 >> 2] = 32.;
		
	}
	
	function instanceClear(dsp) {
		dsp = dsp | 0;
		var i0 = 0;
		var i1 = 0;
		var i2 = 0;
		var i3 = 0;
		var i4 = 0;
		var i5 = 0;
		var i6 = 0;
		var i7 = 0;
		var i8 = 0;
		var i9 = 0;
		var i10 = 0;
		var i11 = 0;
		var i12 = 0;
		var i13 = 0;
		var i14 = 0;
		var i15 = 0;
		var i16 = 0;
		var i17 = 0;
		var i18 = 0;
		var i19 = 0;
		var i20 = 0;
		var i21 = 0;
		var i22 = 0;
		var i23 = 0;
		var i24 = 0;
		var i25 = 0;
		var i26 = 0;
		var i27 = 0;
		var i28 = 0;
		var i29 = 0;
		var i30 = 0;
		var i31 = 0;
		var i32 = 0;
		var i33 = 0;
		var i34 = 0;
		var i35 = 0;
		var i36 = 0;
		var i37 = 0;
		var i38 = 0;
		var i39 = 0;
		var i40 = 0;
		var i41 = 0;
		var i42 = 0;
		var i43 = 0;
		var i44 = 0;
		var i45 = 0;
		var i46 = 0;
		var i47 = 0;
		var i48 = 0;
		var i49 = 0;
		var i50 = 0;
		var i51 = 0;
		var i52 = 0;
		var i53 = 0;
		var i54 = 0;
		var i55 = 0;
		var i56 = 0;
		var i57 = 0;
		var i58 = 0;
		var i59 = 0;
		var i60 = 0;
		var i61 = 0;
		var i62 = 0;
		var i63 = 0;
		var i64 = 0;
		var i65 = 0;
		var i66 = 0;
		for (i0 = 0; (((i0 | 0) < 2) | 0); i0 = (((i0 | 0) + 1) | 0)) {
			HEAP32[dsp + 8 + ((i0 | 0) << 2) >> 2] = 0;
			
		}
		for (i1 = 0; (((i1 | 0) < 2) | 0); i1 = (((i1 | 0) + 1) | 0)) {
			HEAPF[dsp + 481680 + ((i1 | 0) << 2) >> 2] = 0.;
			
		}
		for (i2 = 0; (((i2 | 0) < 2) | 0); i2 = (((i2 | 0) + 1) | 0)) {
			HEAPF[dsp + 481688 + ((i2 | 0) << 2) >> 2] = 0.;
			
		}
		HEAP32[dsp + 4 >> 2] = 0;
		for (i3 = 0; (((i3 | 0) < 512) | 0); i3 = (((i3 | 0) + 1) | 0)) {
			HEAPF[dsp + 479248 + ((i3 | 0) << 2) >> 2] = 0.;
			
		}
		for (i4 = 0; (((i4 | 0) < 3) | 0); i4 = (((i4 | 0) + 1) | 0)) {
			HEAPF[dsp + 481296 + ((i4 | 0) << 2) >> 2] = 0.;
			
		}
		for (i5 = 0; (((i5 | 0) < 2048) | 0); i5 = (((i5 | 0) + 1) | 0)) {
			HEAPF[dsp + 458768 + ((i5 | 0) << 2) >> 2] = 0.;
			
		}
		for (i6 = 0; (((i6 | 0) < 3) | 0); i6 = (((i6 | 0) + 1) | 0)) {
			HEAPF[dsp + 481308 + ((i6 | 0) << 2) >> 2] = 0.;
			
		}
		for (i7 = 0; (((i7 | 0) < 4096) | 0); i7 = (((i7 | 0) + 1) | 0)) {
			HEAPF[dsp + 16 + ((i7 | 0) << 2) >> 2] = 0.;
			
		}
		for (i8 = 0; (((i8 | 0) < 3) | 0); i8 = (((i8 | 0) + 1) | 0)) {
			HEAPF[dsp + 481320 + ((i8 | 0) << 2) >> 2] = 0.;
			
		}
		for (i9 = 0; (((i9 | 0) < 4096) | 0); i9 = (((i9 | 0) + 1) | 0)) {
			HEAPF[dsp + 16400 + ((i9 | 0) << 2) >> 2] = 0.;
			
		}
		for (i10 = 0; (((i10 | 0) < 3) | 0); i10 = (((i10 | 0) + 1) | 0)) {
			HEAPF[dsp + 481332 + ((i10 | 0) << 2) >> 2] = 0.;
			
		}
		for (i11 = 0; (((i11 | 0) < 4096) | 0); i11 = (((i11 | 0) + 1) | 0)) {
			HEAPF[dsp + 32784 + ((i11 | 0) << 2) >> 2] = 0.;
			
		}
		for (i12 = 0; (((i12 | 0) < 3) | 0); i12 = (((i12 | 0) + 1) | 0)) {
			HEAPF[dsp + 481344 + ((i12 | 0) << 2) >> 2] = 0.;
			
		}
		for (i13 = 0; (((i13 | 0) < 4096) | 0); i13 = (((i13 | 0) + 1) | 0)) {
			HEAPF[dsp + 49168 + ((i13 | 0) << 2) >> 2] = 0.;
			
		}
		for (i14 = 0; (((i14 | 0) < 3) | 0); i14 = (((i14 | 0) + 1) | 0)) {
			HEAPF[dsp + 481356 + ((i14 | 0) << 2) >> 2] = 0.;
			
		}
		for (i15 = 0; (((i15 | 0) < 4096) | 0); i15 = (((i15 | 0) + 1) | 0)) {
			HEAPF[dsp + 65552 + ((i15 | 0) << 2) >> 2] = 0.;
			
		}
		for (i16 = 0; (((i16 | 0) < 3) | 0); i16 = (((i16 | 0) + 1) | 0)) {
			HEAPF[dsp + 481368 + ((i16 | 0) << 2) >> 2] = 0.;
			
		}
		for (i17 = 0; (((i17 | 0) < 4096) | 0); i17 = (((i17 | 0) + 1) | 0)) {
			HEAPF[dsp + 81936 + ((i17 | 0) << 2) >> 2] = 0.;
			
		}
		for (i18 = 0; (((i18 | 0) < 3) | 0); i18 = (((i18 | 0) + 1) | 0)) {
			HEAPF[dsp + 481380 + ((i18 | 0) << 2) >> 2] = 0.;
			
		}
		for (i19 = 0; (((i19 | 0) < 4096) | 0); i19 = (((i19 | 0) + 1) | 0)) {
			HEAPF[dsp + 98320 + ((i19 | 0) << 2) >> 2] = 0.;
			
		}
		for (i20 = 0; (((i20 | 0) < 3) | 0); i20 = (((i20 | 0) + 1) | 0)) {
			HEAPF[dsp + 481392 + ((i20 | 0) << 2) >> 2] = 0.;
			
		}
		for (i21 = 0; (((i21 | 0) < 4096) | 0); i21 = (((i21 | 0) + 1) | 0)) {
			HEAPF[dsp + 114704 + ((i21 | 0) << 2) >> 2] = 0.;
			
		}
		for (i22 = 0; (((i22 | 0) < 3) | 0); i22 = (((i22 | 0) + 1) | 0)) {
			HEAPF[dsp + 481404 + ((i22 | 0) << 2) >> 2] = 0.;
			
		}
		for (i23 = 0; (((i23 | 0) < 4096) | 0); i23 = (((i23 | 0) + 1) | 0)) {
			HEAPF[dsp + 131088 + ((i23 | 0) << 2) >> 2] = 0.;
			
		}
		for (i24 = 0; (((i24 | 0) < 3) | 0); i24 = (((i24 | 0) + 1) | 0)) {
			HEAPF[dsp + 481416 + ((i24 | 0) << 2) >> 2] = 0.;
			
		}
		for (i25 = 0; (((i25 | 0) < 4096) | 0); i25 = (((i25 | 0) + 1) | 0)) {
			HEAPF[dsp + 147472 + ((i25 | 0) << 2) >> 2] = 0.;
			
		}
		for (i26 = 0; (((i26 | 0) < 3) | 0); i26 = (((i26 | 0) + 1) | 0)) {
			HEAPF[dsp + 481428 + ((i26 | 0) << 2) >> 2] = 0.;
			
		}
		for (i27 = 0; (((i27 | 0) < 4096) | 0); i27 = (((i27 | 0) + 1) | 0)) {
			HEAPF[dsp + 163856 + ((i27 | 0) << 2) >> 2] = 0.;
			
		}
		for (i28 = 0; (((i28 | 0) < 3) | 0); i28 = (((i28 | 0) + 1) | 0)) {
			HEAPF[dsp + 481440 + ((i28 | 0) << 2) >> 2] = 0.;
			
		}
		for (i29 = 0; (((i29 | 0) < 4096) | 0); i29 = (((i29 | 0) + 1) | 0)) {
			HEAPF[dsp + 180240 + ((i29 | 0) << 2) >> 2] = 0.;
			
		}
		for (i30 = 0; (((i30 | 0) < 3) | 0); i30 = (((i30 | 0) + 1) | 0)) {
			HEAPF[dsp + 481452 + ((i30 | 0) << 2) >> 2] = 0.;
			
		}
		for (i31 = 0; (((i31 | 0) < 4096) | 0); i31 = (((i31 | 0) + 1) | 0)) {
			HEAPF[dsp + 196624 + ((i31 | 0) << 2) >> 2] = 0.;
			
		}
		for (i32 = 0; (((i32 | 0) < 3) | 0); i32 = (((i32 | 0) + 1) | 0)) {
			HEAPF[dsp + 481464 + ((i32 | 0) << 2) >> 2] = 0.;
			
		}
		for (i33 = 0; (((i33 | 0) < 4096) | 0); i33 = (((i33 | 0) + 1) | 0)) {
			HEAPF[dsp + 213008 + ((i33 | 0) << 2) >> 2] = 0.;
			
		}
		for (i34 = 0; (((i34 | 0) < 3) | 0); i34 = (((i34 | 0) + 1) | 0)) {
			HEAPF[dsp + 481476 + ((i34 | 0) << 2) >> 2] = 0.;
			
		}
		for (i35 = 0; (((i35 | 0) < 1024) | 0); i35 = (((i35 | 0) + 1) | 0)) {
			HEAPF[dsp + 475152 + ((i35 | 0) << 2) >> 2] = 0.;
			
		}
		for (i36 = 0; (((i36 | 0) < 3) | 0); i36 = (((i36 | 0) + 1) | 0)) {
			HEAPF[dsp + 481488 + ((i36 | 0) << 2) >> 2] = 0.;
			
		}
		for (i37 = 0; (((i37 | 0) < 2048) | 0); i37 = (((i37 | 0) + 1) | 0)) {
			HEAPF[dsp + 466960 + ((i37 | 0) << 2) >> 2] = 0.;
			
		}
		for (i38 = 0; (((i38 | 0) < 3) | 0); i38 = (((i38 | 0) + 1) | 0)) {
			HEAPF[dsp + 481500 + ((i38 | 0) << 2) >> 2] = 0.;
			
		}
		for (i39 = 0; (((i39 | 0) < 4096) | 0); i39 = (((i39 | 0) + 1) | 0)) {
			HEAPF[dsp + 229392 + ((i39 | 0) << 2) >> 2] = 0.;
			
		}
		for (i40 = 0; (((i40 | 0) < 3) | 0); i40 = (((i40 | 0) + 1) | 0)) {
			HEAPF[dsp + 481512 + ((i40 | 0) << 2) >> 2] = 0.;
			
		}
		for (i41 = 0; (((i41 | 0) < 4096) | 0); i41 = (((i41 | 0) + 1) | 0)) {
			HEAPF[dsp + 245776 + ((i41 | 0) << 2) >> 2] = 0.;
			
		}
		for (i42 = 0; (((i42 | 0) < 3) | 0); i42 = (((i42 | 0) + 1) | 0)) {
			HEAPF[dsp + 481524 + ((i42 | 0) << 2) >> 2] = 0.;
			
		}
		for (i43 = 0; (((i43 | 0) < 4096) | 0); i43 = (((i43 | 0) + 1) | 0)) {
			HEAPF[dsp + 262160 + ((i43 | 0) << 2) >> 2] = 0.;
			
		}
		for (i44 = 0; (((i44 | 0) < 3) | 0); i44 = (((i44 | 0) + 1) | 0)) {
			HEAPF[dsp + 481536 + ((i44 | 0) << 2) >> 2] = 0.;
			
		}
		for (i45 = 0; (((i45 | 0) < 4096) | 0); i45 = (((i45 | 0) + 1) | 0)) {
			HEAPF[dsp + 278544 + ((i45 | 0) << 2) >> 2] = 0.;
			
		}
		for (i46 = 0; (((i46 | 0) < 3) | 0); i46 = (((i46 | 0) + 1) | 0)) {
			HEAPF[dsp + 481548 + ((i46 | 0) << 2) >> 2] = 0.;
			
		}
		for (i47 = 0; (((i47 | 0) < 4096) | 0); i47 = (((i47 | 0) + 1) | 0)) {
			HEAPF[dsp + 294928 + ((i47 | 0) << 2) >> 2] = 0.;
			
		}
		for (i48 = 0; (((i48 | 0) < 3) | 0); i48 = (((i48 | 0) + 1) | 0)) {
			HEAPF[dsp + 481560 + ((i48 | 0) << 2) >> 2] = 0.;
			
		}
		for (i49 = 0; (((i49 | 0) < 4096) | 0); i49 = (((i49 | 0) + 1) | 0)) {
			HEAPF[dsp + 311312 + ((i49 | 0) << 2) >> 2] = 0.;
			
		}
		for (i50 = 0; (((i50 | 0) < 3) | 0); i50 = (((i50 | 0) + 1) | 0)) {
			HEAPF[dsp + 481572 + ((i50 | 0) << 2) >> 2] = 0.;
			
		}
		for (i51 = 0; (((i51 | 0) < 4096) | 0); i51 = (((i51 | 0) + 1) | 0)) {
			HEAPF[dsp + 327696 + ((i51 | 0) << 2) >> 2] = 0.;
			
		}
		for (i52 = 0; (((i52 | 0) < 3) | 0); i52 = (((i52 | 0) + 1) | 0)) {
			HEAPF[dsp + 481584 + ((i52 | 0) << 2) >> 2] = 0.;
			
		}
		for (i53 = 0; (((i53 | 0) < 4096) | 0); i53 = (((i53 | 0) + 1) | 0)) {
			HEAPF[dsp + 344080 + ((i53 | 0) << 2) >> 2] = 0.;
			
		}
		for (i54 = 0; (((i54 | 0) < 3) | 0); i54 = (((i54 | 0) + 1) | 0)) {
			HEAPF[dsp + 481596 + ((i54 | 0) << 2) >> 2] = 0.;
			
		}
		for (i55 = 0; (((i55 | 0) < 4096) | 0); i55 = (((i55 | 0) + 1) | 0)) {
			HEAPF[dsp + 360464 + ((i55 | 0) << 2) >> 2] = 0.;
			
		}
		for (i56 = 0; (((i56 | 0) < 3) | 0); i56 = (((i56 | 0) + 1) | 0)) {
			HEAPF[dsp + 481608 + ((i56 | 0) << 2) >> 2] = 0.;
			
		}
		for (i57 = 0; (((i57 | 0) < 4096) | 0); i57 = (((i57 | 0) + 1) | 0)) {
			HEAPF[dsp + 376848 + ((i57 | 0) << 2) >> 2] = 0.;
			
		}
		for (i58 = 0; (((i58 | 0) < 3) | 0); i58 = (((i58 | 0) + 1) | 0)) {
			HEAPF[dsp + 481620 + ((i58 | 0) << 2) >> 2] = 0.;
			
		}
		for (i59 = 0; (((i59 | 0) < 4096) | 0); i59 = (((i59 | 0) + 1) | 0)) {
			HEAPF[dsp + 393232 + ((i59 | 0) << 2) >> 2] = 0.;
			
		}
		for (i60 = 0; (((i60 | 0) < 3) | 0); i60 = (((i60 | 0) + 1) | 0)) {
			HEAPF[dsp + 481632 + ((i60 | 0) << 2) >> 2] = 0.;
			
		}
		for (i61 = 0; (((i61 | 0) < 4096) | 0); i61 = (((i61 | 0) + 1) | 0)) {
			HEAPF[dsp + 409616 + ((i61 | 0) << 2) >> 2] = 0.;
			
		}
		for (i62 = 0; (((i62 | 0) < 3) | 0); i62 = (((i62 | 0) + 1) | 0)) {
			HEAPF[dsp + 481644 + ((i62 | 0) << 2) >> 2] = 0.;
			
		}
		for (i63 = 0; (((i63 | 0) < 4096) | 0); i63 = (((i63 | 0) + 1) | 0)) {
			HEAPF[dsp + 426000 + ((i63 | 0) << 2) >> 2] = 0.;
			
		}
		for (i64 = 0; (((i64 | 0) < 3) | 0); i64 = (((i64 | 0) + 1) | 0)) {
			HEAPF[dsp + 481656 + ((i64 | 0) << 2) >> 2] = 0.;
			
		}
		for (i65 = 0; (((i65 | 0) < 4096) | 0); i65 = (((i65 | 0) + 1) | 0)) {
			HEAPF[dsp + 442384 + ((i65 | 0) << 2) >> 2] = 0.;
			
		}
		for (i66 = 0; (((i66 | 0) < 3) | 0); i66 = (((i66 | 0) + 1) | 0)) {
			HEAPF[dsp + 481668 + ((i66 | 0) << 2) >> 2] = 0.;
			
		}
		
	}
	
	function init(dsp, samplingFreq) {
		dsp = dsp | 0;
		samplingFreq = samplingFreq | 0;
		classInit(dsp, samplingFreq);
		instanceInit(dsp, samplingFreq);
	}
	
	function instanceInit(dsp, samplingFreq) {
		dsp = dsp | 0;
		samplingFreq = samplingFreq | 0;
		instanceConstants(dsp, samplingFreq);
		instanceResetUserInterface(dsp);
		instanceClear(dsp);
	}
	
	function getSampleRate(dsp) {
		dsp = dsp | 0;
		return HEAP32[dsp + 0 >> 2] | 0;
	}
	
	function setParamValue(dsp, offset, value) {
		dsp = dsp | 0;
		offset = offset | 0;
		value = +value;
		HEAPF[dsp + offset >> 2] = value;
	}
	
	function getParamValue(dsp, offset) {
		dsp = dsp | 0;
		offset = offset | 0;
		return +(HEAPF[dsp + offset >> 2]);
	}
	
	function compute(dsp, count, inputs, outputs) {
		dsp = dsp | 0;
		count = count | 0;
		inputs = inputs | 0;
		outputs = outputs | 0;
		var output0 = 0;
		var output1 = 0;
		var fSlow0 = 0.;
		var fSlow1 = 0.;
		var iSlow2 = 0;
		var fSlow3 = 0.;
		var fSlow4 = 0.;
		var fSlow5 = 0.;
		var fSlow6 = 0.;
		var fSlow7 = 0.;
		var iSlow8 = 0;
		var iSlow9 = 0;
		var fSlow10 = 0.;
		var iSlow11 = 0;
		var iSlow12 = 0;
		var iSlow13 = 0;
		var iSlow14 = 0;
		var iSlow15 = 0;
		var iSlow16 = 0;
		var iSlow17 = 0;
		var iSlow18 = 0;
		var iSlow19 = 0;
		var iSlow20 = 0;
		var iSlow21 = 0;
		var iSlow22 = 0;
		var iSlow23 = 0;
		var iSlow24 = 0;
		var iSlow25 = 0;
		var iSlow26 = 0;
		var iSlow27 = 0;
		var iSlow28 = 0;
		var iSlow29 = 0;
		var iSlow30 = 0;
		var iSlow31 = 0;
		var iSlow32 = 0;
		var iSlow33 = 0;
		var iSlow34 = 0;
		var iSlow35 = 0;
		var iSlow36 = 0;
		var iSlow37 = 0;
		var iSlow38 = 0;
		var iSlow39 = 0;
		var iSlow40 = 0;
		var iSlow41 = 0;
		var iSlow42 = 0;
		var iSlow43 = 0;
		var iSlow44 = 0;
		var iSlow45 = 0;
		var iSlow46 = 0;
		var iSlow47 = 0;
		var iSlow48 = 0;
		var iSlow49 = 0;
		var iSlow50 = 0;
		var iSlow51 = 0;
		var iSlow52 = 0;
		var iSlow53 = 0;
		var iSlow54 = 0;
		var iSlow55 = 0;
		var iSlow56 = 0;
		var iSlow57 = 0;
		var iSlow58 = 0;
		var iSlow59 = 0;
		var iSlow60 = 0;
		var iSlow61 = 0;
		var iSlow62 = 0;
		var iSlow63 = 0;
		var iSlow64 = 0;
		var iSlow65 = 0;
		var iSlow66 = 0;
		var iSlow67 = 0;
		var iSlow68 = 0;
		var iSlow69 = 0;
		var iSlow70 = 0;
		var iSlow71 = 0;
		var i = 0;
		var fTemp0 = 0.;
		output0 = (HEAP32[outputs + (0 << 2) >> 2] | 0);
		output1 = (HEAP32[outputs + (1 << 2) >> 2] | 0);
		fSlow0 = +(+(HEAPF[dsp + 481696 >> 2]));
		fSlow1 = +(+(HEAPF[dsp + 481700 >> 2]));
		iSlow2 = ((+(fSlow1) > 0.) | 0);
		fSlow3 = +(0.5 * +(1. - +(+(HEAPF[dsp + 481704 >> 2]))));
		fSlow4 = +(4.65661287e-10 * +(+(HEAPF[dsp + 481708 >> 2])));
		fSlow5 = +(+(HEAPF[dsp + 481712 >> 2]));
		fSlow6 = +(1. / +(+(HEAPF[dsp + 481716 >> 2])));
		fSlow7 = +(+(HEAPF[dsp + 481720 >> 2]));
		iSlow8 = ((~~(+(+(fSlow7) + -1.5)) & 4095) | 0);
		iSlow9 = ((+(fSlow1) > 2.) | 0);
		fSlow10 = +(+(HEAPF[dsp + 481724 >> 2]));
		iSlow11 = ((~~(+(+(+(fSlow7) + +(2. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow12 = ((+(fSlow1) > 4.) | 0);
		iSlow13 = ((~~(+(+(+(fSlow7) + +(4. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow14 = ((+(fSlow1) > 6.) | 0);
		iSlow15 = ((~~(+(+(+(fSlow7) + +(6. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow16 = ((+(fSlow1) > 8.) | 0);
		iSlow17 = ((~~(+(+(+(fSlow7) + +(8. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow18 = ((+(fSlow1) > 10.) | 0);
		iSlow19 = ((~~(+(+(+(fSlow7) + +(10. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow20 = ((+(fSlow1) > 12.) | 0);
		iSlow21 = ((~~(+(+(+(fSlow7) + +(12. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow22 = ((+(fSlow1) > 14.) | 0);
		iSlow23 = ((~~(+(+(+(fSlow7) + +(14. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow24 = ((+(fSlow1) > 16.) | 0);
		iSlow25 = ((~~(+(+(+(fSlow7) + +(16. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow26 = ((+(fSlow1) > 18.) | 0);
		iSlow27 = ((~~(+(+(+(fSlow7) + +(18. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow28 = ((+(fSlow1) > 20.) | 0);
		iSlow29 = ((~~(+(+(+(fSlow7) + +(20. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow30 = ((+(fSlow1) > 22.) | 0);
		iSlow31 = ((~~(+(+(+(fSlow7) + +(22. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow32 = ((+(fSlow1) > 24.) | 0);
		iSlow33 = ((~~(+(+(+(fSlow7) + +(24. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow34 = ((+(fSlow1) > 26.) | 0);
		iSlow35 = ((~~(+(+(+(fSlow7) + +(26. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow36 = ((+(fSlow1) > 28.) | 0);
		iSlow37 = ((~~(+(+(+(fSlow7) + +(28. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow38 = ((+(fSlow1) > 30.) | 0);
		iSlow39 = ((~~(+(+(+(fSlow7) + +(30. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow40 = ((+(fSlow1) > 1.) | 0);
		iSlow41 = ((~~(+(+(+(fSlow10) + +(fSlow7)) + -1.5)) & 4095) | 0);
		iSlow42 = ((+(fSlow1) > 3.) | 0);
		iSlow43 = ((~~(+(+(+(fSlow7) + +(3. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow44 = ((+(fSlow1) > 5.) | 0);
		iSlow45 = ((~~(+(+(+(fSlow7) + +(5. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow46 = ((+(fSlow1) > 7.) | 0);
		iSlow47 = ((~~(+(+(+(fSlow7) + +(7. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow48 = ((+(fSlow1) > 9.) | 0);
		iSlow49 = ((~~(+(+(+(fSlow7) + +(9. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow50 = ((+(fSlow1) > 11.) | 0);
		iSlow51 = ((~~(+(+(+(fSlow7) + +(11. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow52 = ((+(fSlow1) > 13.) | 0);
		iSlow53 = ((~~(+(+(+(fSlow7) + +(13. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow54 = ((+(fSlow1) > 15.) | 0);
		iSlow55 = ((~~(+(+(+(fSlow7) + +(15. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow56 = ((+(fSlow1) > 17.) | 0);
		iSlow57 = ((~~(+(+(+(fSlow7) + +(17. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow58 = ((+(fSlow1) > 19.) | 0);
		iSlow59 = ((~~(+(+(+(fSlow7) + +(19. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow60 = ((+(fSlow1) > 21.) | 0);
		iSlow61 = ((~~(+(+(+(fSlow7) + +(21. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow62 = ((+(fSlow1) > 23.) | 0);
		iSlow63 = ((~~(+(+(+(fSlow7) + +(23. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow64 = ((+(fSlow1) > 25.) | 0);
		iSlow65 = ((~~(+(+(+(fSlow7) + +(25. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow66 = ((+(fSlow1) > 27.) | 0);
		iSlow67 = ((~~(+(+(+(fSlow7) + +(27. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow68 = ((+(fSlow1) > 29.) | 0);
		iSlow69 = ((~~(+(+(+(fSlow7) + +(29. * +(fSlow10))) + -1.5)) & 4095) | 0);
		iSlow70 = ((+(fSlow1) > 31.) | 0);
		iSlow71 = ((~~(+(+(+(31. * +(fSlow10)) + +(fSlow7)) + -1.5)) & 4095) | 0);
		for (i = 0; (((i | 0) < (count | 0)) | 0); i = (((i | 0) + 1) | 0)) {
			HEAP32[dsp + 8 + (0 << 2) >> 2] = (((imul(1103515245, (HEAP32[dsp + 8 + (1 << 2) >> 2] | 0)) | 0) + 12345) | 0);
			HEAPF[dsp + 481680 + (0 << 2) >> 2] = +(fSlow5);
			HEAPF[dsp + 481688 + (0 << 2) >> 2] = +(+(+(((+(+(fSlow5) - +(HEAPF[dsp + 481680 + (1 << 2) >> 2])) > 0.) | 0)) + +(HEAPF[dsp + 481688 + (1 << 2) >> 2])) - +(+(fSlow6) * +(((+(HEAPF[dsp + 481688 + (1 << 2) >> 2]) > 0.) | 0))));
			fTemp0 = +(+(fSlow4) * +(+((HEAP32[dsp + 8 + (0 << 2) >> 2] | 0)) * +(+(((+(HEAPF[dsp + 481688 + (0 << 2) >> 2]) > 0.) | 0)) + 1.52587891e-05)));
			HEAPF[dsp + 479248 + ((((HEAP32[dsp + 4 >> 2] | 0) & 511) | 0) << 2) >> 2] = +(+(+(fSlow3) * +(+(HEAPF[dsp + 481296 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481296 + (2 << 2) >> 2]))) + +(fTemp0));
			HEAPF[dsp + 481296 + (0 << 2) >> 2] = +(HEAPF[dsp + 479248 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow8 | 0)) | 0) & 511) | 0) << 2) >> 2]);
			HEAPF[dsp + 458768 + ((((HEAP32[dsp + 4 >> 2] | 0) & 2047) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481308 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481308 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481308 + (0 << 2) >> 2] = +(HEAPF[dsp + 458768 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow11 | 0)) | 0) & 2047) | 0) << 2) >> 2]);
			HEAPF[dsp + 16 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481320 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481320 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481320 + (0 << 2) >> 2] = +(HEAPF[dsp + 16 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow13 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 16400 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481332 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481332 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481332 + (0 << 2) >> 2] = +(HEAPF[dsp + 16400 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow15 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 32784 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481344 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481344 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481344 + (0 << 2) >> 2] = +(HEAPF[dsp + 32784 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow17 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 49168 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481356 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481356 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481356 + (0 << 2) >> 2] = +(HEAPF[dsp + 49168 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow19 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 65552 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481368 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481368 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481368 + (0 << 2) >> 2] = +(HEAPF[dsp + 65552 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow21 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 81936 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481380 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481380 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481380 + (0 << 2) >> 2] = +(HEAPF[dsp + 81936 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow23 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 98320 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481392 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481392 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481392 + (0 << 2) >> 2] = +(HEAPF[dsp + 98320 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow25 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 114704 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481404 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481404 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481404 + (0 << 2) >> 2] = +(HEAPF[dsp + 114704 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow27 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 131088 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481416 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481416 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481416 + (0 << 2) >> 2] = +(HEAPF[dsp + 131088 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow29 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 147472 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481428 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481428 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481428 + (0 << 2) >> 2] = +(HEAPF[dsp + 147472 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow31 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 163856 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481440 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481440 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481440 + (0 << 2) >> 2] = +(HEAPF[dsp + 163856 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow33 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 180240 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481452 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481452 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481452 + (0 << 2) >> 2] = +(HEAPF[dsp + 180240 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow35 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 196624 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481464 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481464 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481464 + (0 << 2) >> 2] = +(HEAPF[dsp + 196624 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow37 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 213008 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481476 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481476 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481476 + (0 << 2) >> 2] = +(HEAPF[dsp + 213008 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow39 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[output0 + ((i | 0) << 2) >> 2] = +(+(+(fSlow0) * +(+(+(+(+(+(+(+(+(+(+(+(+(+(+(+(+((iSlow2 | 0)) * +(HEAPF[dsp + 481296 + (0 << 2) >> 2])) + +(+((iSlow9 | 0)) * +(HEAPF[dsp + 481308 + (0 << 2) >> 2]))) + +(+((iSlow12 | 0)) * +(HEAPF[dsp + 481320 + (0 << 2) >> 2]))) + +(+((iSlow14 | 0)) * +(HEAPF[dsp + 481332 + (0 << 2) >> 2]))) + +(+((iSlow16 | 0)) * +(HEAPF[dsp + 481344 + (0 << 2) >> 2]))) + +(+((iSlow18 | 0)) * +(HEAPF[dsp + 481356 + (0 << 2) >> 2]))) + +(+((iSlow20 | 0)) * +(HEAPF[dsp + 481368 + (0 << 2) >> 2]))) + +(+((iSlow22 | 0)) * +(HEAPF[dsp + 481380 + (0 << 2) >> 2]))) + +(+((iSlow24 | 0)) * +(HEAPF[dsp + 481392 + (0 << 2) >> 2]))) + +(+((iSlow26 | 0)) * +(HEAPF[dsp + 481404 + (0 << 2) >> 2]))) + +(+((iSlow28 | 0)) * +(HEAPF[dsp + 481416 + (0 << 2) >> 2]))) + +(+((iSlow30 | 0)) * +(HEAPF[dsp + 481428 + (0 << 2) >> 2]))) + +(+((iSlow32 | 0)) * +(HEAPF[dsp + 481440 + (0 << 2) >> 2]))) + +(+((iSlow34 | 0)) * +(HEAPF[dsp + 481452 + (0 << 2) >> 2]))) + +(+((iSlow36 | 0)) * +(HEAPF[dsp + 481464 + (0 << 2) >> 2]))) + +(+((iSlow38 | 0)) * +(HEAPF[dsp + 481476 + (0 << 2) >> 2])))));
			HEAPF[dsp + 475152 + ((((HEAP32[dsp + 4 >> 2] | 0) & 1023) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481488 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481488 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481488 + (0 << 2) >> 2] = +(HEAPF[dsp + 475152 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow41 | 0)) | 0) & 1023) | 0) << 2) >> 2]);
			HEAPF[dsp + 466960 + ((((HEAP32[dsp + 4 >> 2] | 0) & 2047) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481500 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481500 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481500 + (0 << 2) >> 2] = +(HEAPF[dsp + 466960 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow43 | 0)) | 0) & 2047) | 0) << 2) >> 2]);
			HEAPF[dsp + 229392 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481512 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481512 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481512 + (0 << 2) >> 2] = +(HEAPF[dsp + 229392 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow45 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 245776 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481524 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481524 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481524 + (0 << 2) >> 2] = +(HEAPF[dsp + 245776 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow47 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 262160 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481536 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481536 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481536 + (0 << 2) >> 2] = +(HEAPF[dsp + 262160 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow49 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 278544 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481548 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481548 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481548 + (0 << 2) >> 2] = +(HEAPF[dsp + 278544 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow51 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 294928 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481560 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481560 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481560 + (0 << 2) >> 2] = +(HEAPF[dsp + 294928 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow53 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 311312 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481572 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481572 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481572 + (0 << 2) >> 2] = +(HEAPF[dsp + 311312 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow55 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 327696 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481584 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481584 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481584 + (0 << 2) >> 2] = +(HEAPF[dsp + 327696 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow57 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 344080 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481596 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481596 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481596 + (0 << 2) >> 2] = +(HEAPF[dsp + 344080 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow59 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 360464 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481608 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481608 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481608 + (0 << 2) >> 2] = +(HEAPF[dsp + 360464 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow61 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 376848 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481620 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481620 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481620 + (0 << 2) >> 2] = +(HEAPF[dsp + 376848 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow63 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 393232 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481632 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481632 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481632 + (0 << 2) >> 2] = +(HEAPF[dsp + 393232 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow65 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 409616 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481644 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481644 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481644 + (0 << 2) >> 2] = +(HEAPF[dsp + 409616 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow67 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 426000 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481656 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481656 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481656 + (0 << 2) >> 2] = +(HEAPF[dsp + 426000 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow69 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[dsp + 442384 + ((((HEAP32[dsp + 4 >> 2] | 0) & 4095) | 0) << 2) >> 2] = +(+(fTemp0) + +(+(fSlow3) * +(+(HEAPF[dsp + 481668 + (1 << 2) >> 2]) + +(HEAPF[dsp + 481668 + (2 << 2) >> 2]))));
			HEAPF[dsp + 481668 + (0 << 2) >> 2] = +(HEAPF[dsp + 442384 + ((((((HEAP32[dsp + 4 >> 2] | 0) - (iSlow71 | 0)) | 0) & 4095) | 0) << 2) >> 2]);
			HEAPF[output1 + ((i | 0) << 2) >> 2] = +(+(+(fSlow0) * +(+(+(+(+(+(+(+(+(+(+(+(+(+(+(+(+((iSlow40 | 0)) * +(HEAPF[dsp + 481488 + (0 << 2) >> 2])) + +(+((iSlow42 | 0)) * +(HEAPF[dsp + 481500 + (0 << 2) >> 2]))) + +(+((iSlow44 | 0)) * +(HEAPF[dsp + 481512 + (0 << 2) >> 2]))) + +(+((iSlow46 | 0)) * +(HEAPF[dsp + 481524 + (0 << 2) >> 2]))) + +(+((iSlow48 | 0)) * +(HEAPF[dsp + 481536 + (0 << 2) >> 2]))) + +(+((iSlow50 | 0)) * +(HEAPF[dsp + 481548 + (0 << 2) >> 2]))) + +(+((iSlow52 | 0)) * +(HEAPF[dsp + 481560 + (0 << 2) >> 2]))) + +(+((iSlow54 | 0)) * +(HEAPF[dsp + 481572 + (0 << 2) >> 2]))) + +(+((iSlow56 | 0)) * +(HEAPF[dsp + 481584 + (0 << 2) >> 2]))) + +(+((iSlow58 | 0)) * +(HEAPF[dsp + 481596 + (0 << 2) >> 2]))) + +(+((iSlow60 | 0)) * +(HEAPF[dsp + 481608 + (0 << 2) >> 2]))) + +(+((iSlow62 | 0)) * +(HEAPF[dsp + 481620 + (0 << 2) >> 2]))) + +(+((iSlow64 | 0)) * +(HEAPF[dsp + 481632 + (0 << 2) >> 2]))) + +(+((iSlow66 | 0)) * +(HEAPF[dsp + 481644 + (0 << 2) >> 2]))) + +(+((iSlow68 | 0)) * +(HEAPF[dsp + 481656 + (0 << 2) >> 2]))) + +(+((iSlow70 | 0)) * +(HEAPF[dsp + 481668 + (0 << 2) >> 2])))));
			HEAP32[dsp + 8 + (1 << 2) >> 2] = (HEAP32[dsp + 8 + (0 << 2) >> 2] | 0);
			HEAPF[dsp + 481680 + (1 << 2) >> 2] = +(HEAPF[dsp + 481680 + (0 << 2) >> 2]);
			HEAPF[dsp + 481688 + (1 << 2) >> 2] = +(HEAPF[dsp + 481688 + (0 << 2) >> 2]);
			HEAP32[dsp + 4 >> 2] = (((HEAP32[dsp + 4 >> 2] | 0) + 1) | 0);
			HEAPF[dsp + 481296 + (2 << 2) >> 2] = +(HEAPF[dsp + 481296 + (1 << 2) >> 2]);
			HEAPF[dsp + 481296 + (1 << 2) >> 2] = +(HEAPF[dsp + 481296 + (0 << 2) >> 2]);
			HEAPF[dsp + 481308 + (2 << 2) >> 2] = +(HEAPF[dsp + 481308 + (1 << 2) >> 2]);
			HEAPF[dsp + 481308 + (1 << 2) >> 2] = +(HEAPF[dsp + 481308 + (0 << 2) >> 2]);
			HEAPF[dsp + 481320 + (2 << 2) >> 2] = +(HEAPF[dsp + 481320 + (1 << 2) >> 2]);
			HEAPF[dsp + 481320 + (1 << 2) >> 2] = +(HEAPF[dsp + 481320 + (0 << 2) >> 2]);
			HEAPF[dsp + 481332 + (2 << 2) >> 2] = +(HEAPF[dsp + 481332 + (1 << 2) >> 2]);
			HEAPF[dsp + 481332 + (1 << 2) >> 2] = +(HEAPF[dsp + 481332 + (0 << 2) >> 2]);
			HEAPF[dsp + 481344 + (2 << 2) >> 2] = +(HEAPF[dsp + 481344 + (1 << 2) >> 2]);
			HEAPF[dsp + 481344 + (1 << 2) >> 2] = +(HEAPF[dsp + 481344 + (0 << 2) >> 2]);
			HEAPF[dsp + 481356 + (2 << 2) >> 2] = +(HEAPF[dsp + 481356 + (1 << 2) >> 2]);
			HEAPF[dsp + 481356 + (1 << 2) >> 2] = +(HEAPF[dsp + 481356 + (0 << 2) >> 2]);
			HEAPF[dsp + 481368 + (2 << 2) >> 2] = +(HEAPF[dsp + 481368 + (1 << 2) >> 2]);
			HEAPF[dsp + 481368 + (1 << 2) >> 2] = +(HEAPF[dsp + 481368 + (0 << 2) >> 2]);
			HEAPF[dsp + 481380 + (2 << 2) >> 2] = +(HEAPF[dsp + 481380 + (1 << 2) >> 2]);
			HEAPF[dsp + 481380 + (1 << 2) >> 2] = +(HEAPF[dsp + 481380 + (0 << 2) >> 2]);
			HEAPF[dsp + 481392 + (2 << 2) >> 2] = +(HEAPF[dsp + 481392 + (1 << 2) >> 2]);
			HEAPF[dsp + 481392 + (1 << 2) >> 2] = +(HEAPF[dsp + 481392 + (0 << 2) >> 2]);
			HEAPF[dsp + 481404 + (2 << 2) >> 2] = +(HEAPF[dsp + 481404 + (1 << 2) >> 2]);
			HEAPF[dsp + 481404 + (1 << 2) >> 2] = +(HEAPF[dsp + 481404 + (0 << 2) >> 2]);
			HEAPF[dsp + 481416 + (2 << 2) >> 2] = +(HEAPF[dsp + 481416 + (1 << 2) >> 2]);
			HEAPF[dsp + 481416 + (1 << 2) >> 2] = +(HEAPF[dsp + 481416 + (0 << 2) >> 2]);
			HEAPF[dsp + 481428 + (2 << 2) >> 2] = +(HEAPF[dsp + 481428 + (1 << 2) >> 2]);
			HEAPF[dsp + 481428 + (1 << 2) >> 2] = +(HEAPF[dsp + 481428 + (0 << 2) >> 2]);
			HEAPF[dsp + 481440 + (2 << 2) >> 2] = +(HEAPF[dsp + 481440 + (1 << 2) >> 2]);
			HEAPF[dsp + 481440 + (1 << 2) >> 2] = +(HEAPF[dsp + 481440 + (0 << 2) >> 2]);
			HEAPF[dsp + 481452 + (2 << 2) >> 2] = +(HEAPF[dsp + 481452 + (1 << 2) >> 2]);
			HEAPF[dsp + 481452 + (1 << 2) >> 2] = +(HEAPF[dsp + 481452 + (0 << 2) >> 2]);
			HEAPF[dsp + 481464 + (2 << 2) >> 2] = +(HEAPF[dsp + 481464 + (1 << 2) >> 2]);
			HEAPF[dsp + 481464 + (1 << 2) >> 2] = +(HEAPF[dsp + 481464 + (0 << 2) >> 2]);
			HEAPF[dsp + 481476 + (2 << 2) >> 2] = +(HEAPF[dsp + 481476 + (1 << 2) >> 2]);
			HEAPF[dsp + 481476 + (1 << 2) >> 2] = +(HEAPF[dsp + 481476 + (0 << 2) >> 2]);
			HEAPF[dsp + 481488 + (2 << 2) >> 2] = +(HEAPF[dsp + 481488 + (1 << 2) >> 2]);
			HEAPF[dsp + 481488 + (1 << 2) >> 2] = +(HEAPF[dsp + 481488 + (0 << 2) >> 2]);
			HEAPF[dsp + 481500 + (2 << 2) >> 2] = +(HEAPF[dsp + 481500 + (1 << 2) >> 2]);
			HEAPF[dsp + 481500 + (1 << 2) >> 2] = +(HEAPF[dsp + 481500 + (0 << 2) >> 2]);
			HEAPF[dsp + 481512 + (2 << 2) >> 2] = +(HEAPF[dsp + 481512 + (1 << 2) >> 2]);
			HEAPF[dsp + 481512 + (1 << 2) >> 2] = +(HEAPF[dsp + 481512 + (0 << 2) >> 2]);
			HEAPF[dsp + 481524 + (2 << 2) >> 2] = +(HEAPF[dsp + 481524 + (1 << 2) >> 2]);
			HEAPF[dsp + 481524 + (1 << 2) >> 2] = +(HEAPF[dsp + 481524 + (0 << 2) >> 2]);
			HEAPF[dsp + 481536 + (2 << 2) >> 2] = +(HEAPF[dsp + 481536 + (1 << 2) >> 2]);
			HEAPF[dsp + 481536 + (1 << 2) >> 2] = +(HEAPF[dsp + 481536 + (0 << 2) >> 2]);
			HEAPF[dsp + 481548 + (2 << 2) >> 2] = +(HEAPF[dsp + 481548 + (1 << 2) >> 2]);
			HEAPF[dsp + 481548 + (1 << 2) >> 2] = +(HEAPF[dsp + 481548 + (0 << 2) >> 2]);
			HEAPF[dsp + 481560 + (2 << 2) >> 2] = +(HEAPF[dsp + 481560 + (1 << 2) >> 2]);
			HEAPF[dsp + 481560 + (1 << 2) >> 2] = +(HEAPF[dsp + 481560 + (0 << 2) >> 2]);
			HEAPF[dsp + 481572 + (2 << 2) >> 2] = +(HEAPF[dsp + 481572 + (1 << 2) >> 2]);
			HEAPF[dsp + 481572 + (1 << 2) >> 2] = +(HEAPF[dsp + 481572 + (0 << 2) >> 2]);
			HEAPF[dsp + 481584 + (2 << 2) >> 2] = +(HEAPF[dsp + 481584 + (1 << 2) >> 2]);
			HEAPF[dsp + 481584 + (1 << 2) >> 2] = +(HEAPF[dsp + 481584 + (0 << 2) >> 2]);
			HEAPF[dsp + 481596 + (2 << 2) >> 2] = +(HEAPF[dsp + 481596 + (1 << 2) >> 2]);
			HEAPF[dsp + 481596 + (1 << 2) >> 2] = +(HEAPF[dsp + 481596 + (0 << 2) >> 2]);
			HEAPF[dsp + 481608 + (2 << 2) >> 2] = +(HEAPF[dsp + 481608 + (1 << 2) >> 2]);
			HEAPF[dsp + 481608 + (1 << 2) >> 2] = +(HEAPF[dsp + 481608 + (0 << 2) >> 2]);
			HEAPF[dsp + 481620 + (2 << 2) >> 2] = +(HEAPF[dsp + 481620 + (1 << 2) >> 2]);
			HEAPF[dsp + 481620 + (1 << 2) >> 2] = +(HEAPF[dsp + 481620 + (0 << 2) >> 2]);
			HEAPF[dsp + 481632 + (2 << 2) >> 2] = +(HEAPF[dsp + 481632 + (1 << 2) >> 2]);
			HEAPF[dsp + 481632 + (1 << 2) >> 2] = +(HEAPF[dsp + 481632 + (0 << 2) >> 2]);
			HEAPF[dsp + 481644 + (2 << 2) >> 2] = +(HEAPF[dsp + 481644 + (1 << 2) >> 2]);
			HEAPF[dsp + 481644 + (1 << 2) >> 2] = +(HEAPF[dsp + 481644 + (0 << 2) >> 2]);
			HEAPF[dsp + 481656 + (2 << 2) >> 2] = +(HEAPF[dsp + 481656 + (1 << 2) >> 2]);
			HEAPF[dsp + 481656 + (1 << 2) >> 2] = +(HEAPF[dsp + 481656 + (0 << 2) >> 2]);
			HEAPF[dsp + 481668 + (2 << 2) >> 2] = +(HEAPF[dsp + 481668 + (1 << 2) >> 2]);
			HEAPF[dsp + 481668 + (1 << 2) >> 2] = +(HEAPF[dsp + 481668 + (0 << 2) >> 2]);
			
		}
		
	}
	
	return { getNumInputs : getNumInputs, getNumOutputs : getNumOutputs, classInit : classInit, instanceInit : instanceInit, instanceConstants : instanceConstants, instanceResetUserInterface : instanceResetUserInterface, instanceClear : instanceClear, init : init, getSampleRate : getSampleRate, setParamValue : setParamValue, getParamValue : getParamValue, compute : compute };
}

function getSizekarplus32() {
	return 481728;
}

function getPathTablekarplus32() {
	var pathTable = [];
	pathTable["/karplus32/excitator/play"] = 481712;
	pathTable["/karplus32/output_volume"] = 481696;
	pathTable["/karplus32/resonator_x32/polyphony"] = 481700;
	pathTable["/karplus32/resonator_x32/attenuation"] = 481704;
	pathTable["/karplus32/noise_generator/level"] = 481708;
	pathTable["/karplus32/excitator/excitation_(samples)"] = 481716;
	pathTable["/karplus32/resonator_x32/duration_(samples)"] = 481720;
	pathTable["/karplus32/resonator_x32/detune"] = 481724;
	return pathTable;
}

function getJSONkarplus32() {
	return "{  \"name\": \"karplus32\",  \"inputs\": \"0\",  \"outputs\": \"2\",  \"meta\": [    { \"author\": \"Grame\" },   { \"compilation_options\": \"-single -scal\" },   { \"copyright\": \"(c)GRAME 2006\" },   { \"delay_lib_name\": \"Faust Delay Library\" },   { \"delay_lib_version\": \"0.0\" },   { \"library_path\": \"karplus32\" },   { \"license\": \"BSD\" },   { \"name\": \"karplus32\" },   { \"noise_lib_name\": \"Faust Noise Generator Library\" },   { \"noise_lib_version\": \"0.0\" },   { \"version\": \"1.0\" }  ],  \"ui\": [    {    \"type\": \"vgroup\",    \"label\": \"karplus32\",    \"items\": [      {      \"type\": \"vgroup\",      \"label\": \"excitator\",      \"items\": [        {        \"type\": \"hslider\",        \"label\": \"excitation (samples)\",        \"address\": \"/karplus32/excitator/excitation_(samples)\",        \"init\": \"128\",        \"min\": \"2\",        \"max\": \"512\",        \"step\": \"1\"       },       {        \"type\": \"button\",        \"label\": \"play\",        \"address\": \"/karplus32/excitator/play\"       }      ]     },     {      \"type\": \"vgroup\",      \"label\": \"noise generator\",      \"items\": [        {        \"type\": \"hslider\",        \"label\": \"level\",        \"address\": \"/karplus32/noise_generator/level\",        \"init\": \"0.5\",        \"min\": \"0\",        \"max\": \"1\",        \"step\": \"0.1\"       }      ]     },     {      \"type\": \"hslider\",      \"label\": \"output volume\",      \"address\": \"/karplus32/output_volume\",      \"init\": \"0.5\",      \"min\": \"0\",      \"max\": \"1\",      \"step\": \"0.1\"     },     {      \"type\": \"vgroup\",      \"label\": \"resonator x32\",      \"items\": [        {        \"type\": \"hslider\",        \"label\": \"attenuation\",        \"address\": \"/karplus32/resonator_x32/attenuation\",        \"init\": \"0.1\",        \"min\": \"0\",        \"max\": \"1\",        \"step\": \"0.01\"       },       {        \"type\": \"hslider\",        \"label\": \"detune\",        \"address\": \"/karplus32/resonator_x32/detune\",        \"init\": \"32\",        \"min\": \"0\",        \"max\": \"512\",        \"step\": \"1\"       },       {        \"type\": \"hslider\",        \"label\": \"duration (samples)\",        \"address\": \"/karplus32/resonator_x32/duration_(samples)\",        \"init\": \"128\",        \"min\": \"2\",        \"max\": \"512\",        \"step\": \"1\"       },       {        \"type\": \"hslider\",        \"label\": \"polyphony\",        \"address\": \"/karplus32/resonator_x32/polyphony\",        \"init\": \"1\",        \"min\": \"0\",        \"max\": \"32\",        \"step\": \"1\"       }      ]     }    ]   }  ] } ";
}

function metadatakarplus32(m) {
	m.declare("author", "Grame");
	m.declare("compilation_options", "-single -scal");
	m.declare("copyright", "(c)GRAME 2006");
	m.declare("delay_lib_name", "Faust Delay Library");
	m.declare("delay_lib_version", "0.0");
	m.declare("library_path", "karplus32");
	m.declare("license", "BSD");
	m.declare("name", "karplus32");
	m.declare("noise_lib_name", "Faust Noise Generator Library");
	m.declare("noise_lib_version", "0.0");
	m.declare("version", "1.0");
}


// Standard Faust DSP

faust.karplus32 = function (context, buffer_size) {

    var handler = null;
    var ins, outs;
    var scriptProcessor;
    
    var dspInChannnels = [];
    var dspOutChannnels = [];
   
    // Keep JSON parsed object
    var jon_object = JSON.parse(getJSONkarplus32());
    
    function getNumInputsAux () 
    {
        return (jon_object.inputs !== undefined) ? parseInt(jon_object.inputs) : 0;
    }
    
    function getNumOutputsAux () 
    {
        return (jon_object.outputs !== undefined) ? parseInt(jon_object.outputs) : 0;
    }
    
    var numIn = getNumInputsAux();
    var numOut = getNumOutputsAux();
     
    // Memory allocator
    var ptr_size = 4; 
    var sample_size = 4;
    
    function pow2limit (x)
    {
        var n = 2;
        while (n < x) { n = 2 * n; }
        return (n < 65536) ? 65536 : n; // Minimum = 64 kB
    }
     
    var memory_size = pow2limit(getSizekarplus32() + (numIn + numOut) * (ptr_size + (buffer_size * sample_size)));
   
    var HEAP = new ArrayBuffer(memory_size);
    var HEAP32 = new Int32Array(HEAP);
    var HEAPF32 = new Float32Array(HEAP);
     
    console.log(HEAP);
    console.log(HEAP32);
    console.log(HEAPF32);
 
    // bargraph
    var ouputs_timer = 5;
    var ouputs_items = [];
     
    // input items
    var inputs_items = [];
     
    // Start of HEAP index
    var audio_heap_ptr = 0;
     
    // Setup pointers offset
    var audio_heap_ptr_inputs = audio_heap_ptr; 
    var audio_heap_ptr_outputs = audio_heap_ptr_inputs + (numIn * ptr_size);
     
    // Setup buffer offset
    var audio_heap_inputs = audio_heap_ptr_outputs + (numOut * ptr_size);
    var audio_heap_outputs = audio_heap_inputs + (numIn * buffer_size * sample_size);
    
    // Setup DSP offset
    var dsp_start = audio_heap_outputs + (numOut * buffer_size * sample_size);
     
    // Start of DSP memory
    var dsp = dsp_start;
 
    // ASM module
    var factory = karplus32Module(window, null, HEAP);
    console.log(factory);
 
    var pathTable = getPathTablekarplus32();
    
    // Allocate table for 'setParamValue'
    var value_table = [];
        
    function update_outputs () 
    {
        if (ouputs_items.length > 0 && handler && ouputs_timer-- === 0) {
            ouputs_timer = 5;
            for (var i = 0; i < ouputs_items.length; i++) {
                handler(ouputs_items[i], factory.getParamValue(dsp, pathTable[ouputs_items[i]]));
            }
        }
    }
    
    function compute (e) 
    {
        var i, j;
        
        // Read inputs
        for (i = 0; i < numIn; i++) {
            var input = e.inputBuffer.getChannelData(i);
            var dspInput = dspInChannnels[i];
            for (j = 0; j < input.length; j++) {
                dspInput[j] = input[j];
            }
        }
        
        // Update control state
        for (i = 0; i < inputs_items.length; i++) {
            var path = inputs_items[i];
            var values = value_table[path];
            factory.setParamValue(dsp, pathTable[path], values[0]);
            values[0] = values[1];
        }
        
        // Compute
        factory.compute(dsp, buffer_size, ins, outs);
       
        // Update bargraph
        update_outputs();
        
        // Write outputs
        for (i = 0; i < numOut; i++) {
            var output = e.outputBuffer.getChannelData(i);
            var dspOutput = dspOutChannnels[i];
            for (j = 0; j < output.length; j++) {
                output[j] = dspOutput[j];
            }
        }
    };
         
    // JSON parsing
    function parse_ui (ui) 
    {
        for (var i = 0; i < ui.length; i++) {
            parse_group(ui[i]);
        }
    }
    
    function parse_group (group) 
    {
        if (group.items) {
            parse_items(group.items);
        }
    }
    
    function parse_items (items) 
    {
        var i;
        for (i = 0; i < items.length; i++) {
            parse_item(items[i]);
        }
    }
    
    function parse_item (item) 
    {
        if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
            parse_items(item.items);
        } else if (item.type === "hbargraph" || item.type === "vbargraph") {
            // Keep bargraph adresses
            ouputs_items.push(item.address);
        } else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
            // Keep inputs adresses
            inputs_items.push(item.address);
        }
    }
      
    function init ()
    {
        var i;
         
        // Setup web audio context
        console.log("buffer_size %d", buffer_size);
        scriptProcessor = context.createScriptProcessor(buffer_size, numIn, numOut);
        scriptProcessor.onaudioprocess = compute;
        
        if (numIn > 0) {
            ins = audio_heap_ptr_inputs; 
            for (i = 0; i < numIn; i++) { 
                HEAP32[(ins >> 2) + i] = audio_heap_inputs + ((buffer_size * sample_size) * i);
            }
     
            // Prepare Ins buffer tables
            var dspInChans = HEAP32.subarray(ins >> 2, (ins + numIn * ptr_size) >> 2);
            for (i = 0; i < numIn; i++) {
                dspInChannnels[i] = HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + buffer_size * sample_size) >> 2);
            }
        }
        
        if (numOut > 0) {
            outs = audio_heap_ptr_outputs; 
            for (i = 0; i < numOut; i++) { 
                HEAP32[(outs >> 2) + i] = audio_heap_outputs + ((buffer_size * sample_size) * i);
            }
          
            // Prepare Out buffer tables
            var dspOutChans = HEAP32.subarray(outs >> 2, (outs + numOut * ptr_size) >> 2);
            for (i = 0; i < numOut; i++) {
                dspOutChannnels[i] = HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + buffer_size * sample_size) >> 2);
            }
        }
                                
        // bargraph
        parse_ui(jon_object.ui);
        
        // Init DSP
        factory.init(dsp, context.sampleRate);
        
        // Init 'value' table
        for (i = 0; i < inputs_items.length; i++) {
            var path = inputs_items[i];
            var values = new Float32Array(2);
            values[0] = values[1] = factory.getParamValue(dsp, pathTable[path]);
            value_table[path] = values;
        }
    }
    
    init();
    
    // External API
    return {
    	
        destroy : function ()
        {
            // Nothing to do
        },
        
        getNumInputs : function () 
        {
            return getNumInputsAux();
        },
        
        getNumOutputs : function () 
        {
            return getNumOutputsAux();
        },
        
        init : function (sample_rate) 
        {
            factory.init(dsp, sample_rate);
        },
        
        instanceInit : function (sample_rate) 
        {
            factory.instanceInit(dsp, sample_rate);
        },
        
        instanceConstants : function (sample_rate) 
        {
            factory.instanceConstants(dsp, sample_rate);
        },
        
        instanceResetUserInterface : function () 
        {
            factory.instanceResetUserInterface(dsp);
        },
        
        instanceClear : function () 
        {
            factory.instanceClear(dsp);
        },
        
        // Connect/disconnect to another node
        connect : function (node) 
        {
            if (node.getProcessor !== undefined) {
                scriptProcessor.connect(node.getProcessor());
            } else {
                scriptProcessor.connect(node);
            }
        },

        disconnect : function (node) 
        {
            if (node.getProcessor !== undefined) {
                scriptProcessor.disconnect(node.getProcessor());
            } else {
                scriptProcessor.disconnect(node);
            }
        },
        
        setHandler : function (hd)
        {
            handler = hd;
        },
        
        start : function () 
        {
            scriptProcessor.connect(context.destination);
        },

        stop : function () 
        {
            scriptProcessor.disconnect(context.destination);
        },

        setParamValue : function (path, val) 
        {
            var values = value_table[path];
            if (values) {
                if (factory.getParamValue(dsp, pathTable[path]) === values[0]) {
                    values[0] = val;
                } 
                values[1] = val;
            }
        },

        getParamValue : function (path) 
        {
            return factory.getParamValue(dsp, pathTable[path]);
        },
        
        controls : function()
        {
            return inputs_items;
        },
        
        json : function ()
        {
            return getJSONkarplus32();
        },
        
        getProcessor : function ()
        {
            return scriptProcessor;
        }
    };
};

