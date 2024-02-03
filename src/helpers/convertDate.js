export function convertDate(fecha){
    const isoDateString = fecha;
    const date = new Date(isoDateString);
    
    // Obtener los componentes de la fecha
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    // Crear la cadena en el formato deseado
   return `${day}-${month}-${year} ${hours}:${minutes}`
}