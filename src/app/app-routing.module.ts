import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { MenuComponent  } from "./componentes/menu/menu.component";
import { PersonaComponent } from "./componentes/persona/persona.component";
import { ProductoComponent } from "./componentes/producto/producto.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";
const routes:Routes=[
    {
        path:'',redirectTo:'inicio',pathMatch:'full'
    },
    {
        path:'inicio',
        component: InicioComponent
    }
    ,{
        path:'persona',
        component:PersonaComponent
    }
    ,{
        path:'producto',
        component:ProductoComponent
    }
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }