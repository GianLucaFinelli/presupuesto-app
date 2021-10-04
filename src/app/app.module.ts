import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrespuestoComponent } from './pages/prespuesto/prespuesto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    PrespuestoComponent,
    NavbarComponent,
    GalleryComponent,
    FormularioComponent,
    CotizacionComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
