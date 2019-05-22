const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Tarea a ejecutar'
};

const completado = {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca de tarea completada'

};

const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea por hacer', { descripcion })
    .command('actualizar', 'Marcar una tarea como ocmpletada', { descripcion, completado })
    .command('borrar', 'Elimina una tarea de la lista', { descripcion })
    .command('listar', 'listar las tareas por hacer', {})
    .help()
    .argv;


module.exports = {
    argv
}