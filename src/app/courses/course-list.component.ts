import { Component, OnInit } from "@angular/core";
import { CourseService } from "./course.service";
import { Course } from "./courses";

@Component({

    templateUrl: './course-list.component.html'

})

// Podemos implementar o OnInit para que algumas operações sejam executadas assim que o componente for inicializado
export class CourseListComponent implements OnInit{

    filteredCourse: Course[] = [];

    _courses: Course[] =  [];

    _filterBy: string;

    constructor (private courseService: CourseService){

    }

    ngOnInit():void {// Método que será executado na inicialização
        
        this.retrieveAll();
    }

    retrieveAll():void{

        this.courseService.retrieveAll().subscribe({  // returno oque o observable envolopou
           
            next: courses => {  // Recebe o retorno do retrieveAll de course-services.ts
                this._courses = courses;
                this.filteredCourse = this._courses;
            },
            error: err => console.log("Error", err)
        });
    }

    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () =>{
                console.log("Deletado com sucesso");
                this.retrieveAll();// retrieveall vai consultar novamente
            },
            error: err => console.log("Erro", err)
        })
    }

    // Usado quando digitarmos no input
    set filter(value: string){
        this._filterBy = value;

        this.filteredCourse = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1 );
    }

    get filter(){
        return this._filterBy;
    }



}