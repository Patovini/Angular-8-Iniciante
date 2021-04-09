import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "./course.service";
import { Course } from "./courses";

@Component ({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{


    course: Course;

    //Utilizamos o ActivatedRouter para pegar este parâmetro.
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService ){

    }

    ngOnInit(): void{
    
        // Captura o estado da rota neste momento, obtendo o parametro "id",
        // e atribui ao "courseId"

        this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: course => this.course = course,
            error: err => console.log("Error", err )
        });

    }
 
    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log("Savo com sucesso",course),
            error: err => console.log("Erro",err)
        });
    }

    

}