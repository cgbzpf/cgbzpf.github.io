let girlData = {
    photo: './images/buxa.jpg',
    title: 'A vietnamese chick',
    description: 'Na itt a kert',
};

$('#photo').attr('src', girlData.photo);
$('#title').text(girlData.title);
$('#description').text(girlData.description);

let valleyData = {
    photo: './images/rivervalley.jpg',
    title: 'A valley',
    description: 'Helo',
};

$('#photo').attr('src', valleyData.photo);
$('#title').text(valleyData.title);
$('#description').text(valleyData.description);

let fieldData = {
    photo: './images/ricefield.jpg',
    title: 'A ricefield',
    description: 'Jol latod',
};

$('#photo').attr('src', fieldData.photo);
$('#title').text(fieldData.title);
$('#description').text(fieldData.description);

let bayData = {
    photo: './images/halong.jpg',
    title: 'Halong bay',
    description: 'Yepp',
};

$('#photo').attr('src', bayData.photo);
$('#title').text(bayData.title);
$('#description').text(bayData.description);

let currentPhoto = 0;
let imagesData = [girlData, valleyData, fieldData, bayData];
$('#photo').attr('src', imagesData[currentPhoto].photo)
$('#title').text(imagesData[currentPhoto].title)
$('#description').text(imagesData[currentPhoto].description)

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#title').text(imagesData[photoNumber].title);
    $('#description').text(imagesData[photoNumber].description);
    $('.thumbnail').css('border', 'ridge');

  };
  
  loadPhoto(currentPhoto);

  $('#leftarrow.arrowimg').click(() => {
    if(currentPhoto > 0) {
    currentPhoto--;
    loadPhoto(currentPhoto);
    console.log(currentPhoto);
  }});
  
  $('#rightarrow.arrowimg').click(() => {
    if(currentPhoto < 4) {
      currentPhoto++;
      loadPhoto(currentPhoto);
      console.log(currentPhoto);
  }});

  imagesData.forEach((thumbnail, index) => {
    $('#thumbnail-container')
    .append(`<img class="thumbnail" id="thumb${index}" data-index="${index}" src="${thumbnail.photo}">`);
  });
    $('.thumbnail').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    $('#picture').attr('src', imagesdata[indexClicked].photo);
    $('#title').text(imagesdata[indexClicked].title);
    $('#text').text(imagesdata[indexClicked].text);
    $(`thumb${index}`).css("border", "solid red");
});

