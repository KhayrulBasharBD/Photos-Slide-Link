const photos = [ './img/img-01.jpg', './img/img-02.jpg', './img/img-03.jpg', './img/img-04.jpg', './img/img-05.jpg', './img/img-06.jpg', './img/img-07.jpg', './img/img-08.jpg', './img/img-09.jpg', './img/img-10.jpg', './img/img-11.jpg', './img/img-12.jpg', './img/img-13.jpg', './img/img-14.jpg' ]

let imgShow = document.querySelector('img');

let count = 0;

let next = () =>
{
    if (count >= photos.length)
    {
        count = 0;
        imgShow.src = photos[ count ];
    } else
    {
        imgShow.src = photos[ count ];
    }
    count++;
}

let prev = () =>
{
    count--;
    if (count < 0)
    {
        count = photos.length - 1;
        imgShow.src = photos[ count ];
    } else
    {
        imgShow.src = photos[count]
    }
}