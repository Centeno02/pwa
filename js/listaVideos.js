var videos=[
    {titulo:'Video 1', descripcion: 'Descripcion videos 1', url:'https://www.youtube.com/embed/jnE7BSvCrhE?si=4fprP7Y4IeszaeTm '},
    {titulo:'Video 2', descripcion: 'Descripcion videos 2', url:'https://www.youtube.com/embed/jhMiIUb2GEA?si=sq6u1BzOn1jE-XvB'},
    {titulo:'Video 3', descripcion: 'Descripcion videos 3', url:'https://www.youtube.com/embed/20rs8mPRVWc?si=NxDnWukc_7RxJXHd'},
    {titulo:'Video 4', descripcion: 'Descripcion videos 3', url:'https://www.youtube.com/embed/aTltEfmtvCE?si=ku2dhfBZdiwXv5L4'}

];

var listaVideos = document.getElementById('listaVideosArreglo');

mostrarListaVideos(videos);


function mostrarListaVideos(videosBuscado) {
    listaVideos.innerHTML='';

    videosBuscado.forEach(indiceVideo =>{
        var fila = document.createElement('div');
        var colVideos = document.createElement('div');
        var iframeVideos= document.createElement('iframe');

        fila.setAttribute('class','row ');
        colVideos.setAttribute('class','col-5 g-2')
        iframeVideos.setAttribute("src", indiceVideo.url);
        iframeVideos.setAttribute('width', '100%');
        iframeVideos.setAttribute('height','100%');
        iframeVideos.setAttribute('frameborder','0');
      
        

        colVideos.appendChild(iframeVideos);
        fila.appendChild(colVideos);


        var col2Titulo=document.createElement('div');
        var h4Tirulo = document.createElement('h4');
        var h6Descripcion = document.createElement('h6');


        
        col2Titulo.setAttribute('class', 'col-5');
        h4Tirulo.textContent=indiceVideo.titulo;
        h6Descripcion.textContent=indiceVideo.descripcion;

        col2Titulo.appendChild(h4Tirulo);
        col2Titulo.appendChild(h6Descripcion);
        fila.appendChild(col2Titulo);


        var col3Boton=document.createElement('div');
        var boton=document.createElement('button');

        col3Boton.setAttribute('class','col-2');
        boton.setAttribute('class','btn btn-outline-danger');
        boton.innerHTML='@';

        col3Boton.appendChild(boton);

        fila.appendChild (col3Boton);

        listaVideos.appendChild(fila);
    });
}


function buscarVideos() {
    var textVideo=document.getElementById('txtBuscar').Value;
   // alert('texto buscado') + textVideo;
    var  videosBuscado=videos.filter(
      indiceVideo =>{
        return indiceVideo.titulo.includes(textVideo);
      }
    );

    mostrarListaVideos(videosBuscado);
}

