
f = document._slideShow;
n = 0;
t = 0;

document.images["stage"].width  = oW;
document.images["stage"].height = oH;
f.delay.value = display;

// add image numbers to select menu
f.wichIm.options.length = 0;
for(i in SLIDES){
	f.wichIm.options[i] = new Option(SLIDES[i][1],i);
}

function startSS(){
	t = setTimeout("runSS(" + f.currSlide.value + ")", 1 * 1);
}

function runSS(n){
	n++;
	if(n >= SLIDES.length){
		n = 0;
	}
	document.images["stage"].src = S[n].src;
	if(document.all && navigator.userAgent.indexOf("Opera") < 0 && navigator.userAgent.indexOf("Windows") >= 0){
		document.images["stage"].style.visibility = "hidden";
		document.images["stage"].filters.item(0).apply();
		document.images["stage"].filters.item(0).transition = effect;
		document.images["stage"].style.visibility = "visible";
		document.images["stage"].filters(0).play(duration);
	}
	f.currSlide.value = n;
	f.wichIm[n].selected = true;
	t = setTimeout("runSS(" + f.currSlide.value + ")", f.delay.value * 1000);
}

function stopSS(){
	if(t){
		t = clearTimeout(t);
	}
}

function nextSS(){
	stopSS();
	n = f.currSlide.value;
	n++;
	if(n >= SLIDES.length){
		n = 0;
	}
	if(n < 0){
		n = SLIDES.length - 1;
	}
	document.images["stage"].src = S[n].src;
	f.currSlide.value = n;
	f.wichIm[n].selected = true;
	if(document.all && navigator.userAgent.indexOf("Opera") < 0 && navigator.userAgent.indexOf("Windows") >= 0){
		document.images["stage"].style.visibility = "hidden";
		document.images["stage"].filters.item(0).apply();
		document.images["stage"].filters.item(0).transition = effect;
		document.images["stage"].style.visibility = "visible";
		document.images["stage"].filters(0).play(duration);
	}
}

function prevSS(){
	stopSS();
	n = f.currSlide.value;
	n--;
	if(n >= SLIDES.length){
		n = 0;
	}
	if(n < 0){
		n = SLIDES.length - 1;
	}
	document.images["stage"].src = S[n].src;
	f.currSlide.value = n;
	f.wichIm[n].selected = true;
	
	if(document.all && navigator.userAgent.indexOf("Opera") < 0 && navigator.userAgent.indexOf("Windows") >= 0){
		document.images["stage"].style.visibility = "hidden";
		document.images["stage"].filters.item(0).apply();
		document.images["stage"].filters.item(0).transition = effect;
		document.images["stage"].style.visibility = "visible";
		document.images["stage"].filters(0).play(duration);
	}
}

function selected(n){
	stopSS();
	document.images["stage"].src = S[n].src;
	f.currSlide.value = n;
	
	if(document.all && navigator.userAgent.indexOf("Opera") < 0 && navigator.userAgent.indexOf("Windows") >= 0){
		document.images["stage"].style.visibility = "hidden";
		document.images["stage"].filters.item(0).apply();
		document.images["stage"].filters.item(0).transition = effect;
		document.images["stage"].style.visibility = "visible";
		document.images["stage"].filters(0).play(duration);
	}
}

function zoom(dim1, dim2){
	if(dim1){
		if(document.images["stage"].width < oW){
			document.images["stage"].width   = oW;
			document.images["stage"].height  = oH;
		} else {
			document.images["stage"].width  += dim1;
			document.images["stage"].height += dim2;
		}
		if(dim1 < 0){
			if(document.images["stage"].width < oW){
				document.images["stage"].width   = oW;
				document.images["stage"].height  = oH;
			}
		}
	} else {
		document.images["stage"].width   = oW;
		document.images["stage"].height  = oH;
	}
}