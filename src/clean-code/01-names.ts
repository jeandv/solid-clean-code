(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, fileEvaluated: false },
        { id: 2, fileEvaluated: false },
        { id: 3, fileEvaluated: true },
        { id: 4, fileEvaluated: false },
        { id: 5, fileEvaluated: false },
        { id: 7, fileEvaluated: true },
    ];

    // Archivos marcados para borrar - files to delete
    const filesEvaluatedToDelete = filesToEvaluate.map(fileEvaluatedToDelete => fileEvaluatedToDelete.fileEvaluated);

    // Mal ejm
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor ejm
    class User { };
    interface User { };


    // Todo: Tarea

    // día de hoy - today
    const dateOfToday = new Date();

    // días transcurridos - elapsed time in days
    const elapsedTimeInDays: number = 23;

    // número de archivos en un directorio - number of files in directory
    const directoryFiles = 33;

    // primer nombre - first name
    const userFirstName = 'Jean';

    // primer apellido - last name
    const userLastName = 'Rondón';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;

    // cantidad máxima de clases por estudiante - max classes per student
    const maxNumberClassPerStudent = 6;


})();