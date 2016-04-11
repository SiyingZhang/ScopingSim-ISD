$( document ).ready(function(){
	var prevX = 0;
	var prevY = 0;
	var $videoPreview = $("#videoPreview");
	var video = $videoPreview.get(0);
	var h = $( document ).height();
	var w = $( document ).width();
	
	// mousemove and track x and y
	$('#videoPreview').mousemove(function( event ) {
		var coordX = event.pageX;
		var coordY = event.pageY;

		if(prevY < coordY)
			video.currentTime = video.currentTime + 0.05; // percent * video.duration;
		else
			video.currentTime = video.currentTime - 0.05; // percent * video.duration;
			
		prevY = coordY;
		prevX = coordX;
		$('#debugInfo').text("movement: " + coordY + "; rotation: " + coordX);

		var $videoInfo = $('.videoInfo');
		$videoInfo.find('.info-x .detail-value').text(coordX);
		$videoInfo.find('.info-y .detail-value').text(coordY);

		var formatTime = Math.round(video.currentTime * 100) / 100;

		$videoInfo.find('.info-time .detail-value').text(formatTime);
	});

	// click the video area to enable, click on the preview area and catch x and y
	$('#videoPreview').click(function(){
		console.log('click');
		$('.sidebar .overlay').addClass('hidden');
		var $videoInfo = $('.videoInfo');
		var xPath = '.info-x .detail-value';
		var yPath = '.info-y .detail-value';
		var timePath = '.info-time .detail-value';
		var x = $videoInfo.find(xPath).text();
		var y = $videoInfo.find(yPath).text();
		var time = $videoInfo.find(timePath).text();

		var $sidebarInfo = $('.sidebar-info');
		$sidebarInfo.find(xPath).text(x);
		$sidebarInfo.find(yPath).text(y);
		$sidebarInfo.find(timePath).text(time);
	})

	//click the submit Event button to overlay
	$('#submitEvent').click(function(){
		console.log('click');
		$('.sidebar .overlay').removeClass('hidden');
	})



	// add new note/quiz button
	$('.modal').on('click', '.add-btn', function(){
		var id = $(this).closest('.modal').attr('id');
		addOperation(id);
	})

	// edit model
	$('.modal').on('click', '.edit, .save', function(){
		var isEdit = $(this).hasClass('edit');
		var $choice = $(this).closest('.choice');
		editOperation($choice, isEdit);
	})

	// check correct answer
	$('.modal').on('click', '.check-answer', function(){
		var $modal = $(this).closest('.modal');
		var $choices = $(this).closest('.choices');
		var id = $modal.attr('id');
		var isMultiple = id.indexOf('multiple') > -1;
		checkAnswerOperation($choices, $(this), isMultiple);
	})

	$('.modal').on('hidden.bs.modal', function(){
		console.log('close');
		initModal($(this));
	})

});


function addOperation(id) {
	var $modal = $('#' + id);
	var $template = $modal.find('.input-template').clone().removeClass('hidden input-template').addClass('extra-version');

	var $target = $modal.find('.content-area');

	$target.append('<hr>').append($template);
	$template.hide().slideDown();
}

function editOperation($choice, isEdit) {

	var $text = $choice.find('.choice-text');
	var $editBtn = $choice.find('.edit');
	var $saveBtn = $choice.find('.save');
	if (isEdit) {
		$text.attr('contentEditable', true).addClass('form-control');
		$editBtn.addClass('hidden');
		$saveBtn.removeClass('hidden');
	} else {
		// save
		$text.attr('contentEditable', false).removeClass('form-control');
		$editBtn.removeClass('hidden');
		$saveBtn.addClass('hidden');
	}
}

function checkAnswerOperation($choices, $target, isMultiple) {

	if (isMultiple) {
		$target.toggleClass('correct-answer');
	} else {
		$choices.find('.correct-answer').removeClass('correct-answer');
		$target.addClass('correct-answer');
	}

}

function initModal($modal) {
	var $template = $modal.find('.input-template').clone().removeClass('hidden input-template').add('original-version');
	$modal.find('.content-area').empty();
	$modal.find('.content-area').append($template);
	$modal.find('.correct-answer').removeClass('correct-answer');
}




