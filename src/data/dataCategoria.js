function ResultListCategoria(categoria) {
    let list = [];
    categoria.forEach((element) => {
      
      var item = {};
      
        item.id = element.id;
        item.nombre = element.nombre;
        item.fechacreacion = element.fechacreacion;
      list.push(item);
      
    });
    return list;
  }
  
  export default ResultListCategoria;
  
  
  