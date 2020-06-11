function ResultListCard(result, listImg) {
  let list = [];
  result.forEach((element) => {
    var img = listImg.find(imagen => ObtenerIdCategoriaApi(imagen.idarticulo) == element.id);
    var item = {};
    var i = "/img/NoImagen.jpg";
    if (img) i = img.nombrefichero;
    
    item.titulo = element.titulo;
    item.descripcion = element.descirpcion;
    item.alt = element.titulo;
    item.img = i;
    item.id = element.id;
    item.boton = "Detalle";
    item.href = "/detalle/" + element.id;

    list.push(item);
    
  });
  return list;
}

function ObtenerIdCategoriaApi(value){
    return value.split("/")[3];
}

export default ResultListCard;


