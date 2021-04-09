import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule ({// Componentes que o módulo de curso precisa para poder existir

    declarations:  [
        CourseListComponent,
        CourseInfoComponent,

    ], imports: [ // Rotas que o módulo de cursos tem e que precisam ser carregadas junto com o este módulo
        FormsModule,
        StarModule,
        AppPipeModule,
        CommonModule, // recursos basicos do angular
        RouterModule.forChild([
            {
                // Ex: quando for escrito "courses" na url do Browser vai ser acessado o componente "CourseListComponent"
                path: 'courses', component: CourseListComponent
              },
              {
                path: 'courses/info/:id', component: CourseInfoComponent
              },
        ])

    ]
})

export class CourseModule{

}