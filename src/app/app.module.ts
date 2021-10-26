import { forwardRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrespuestoComponent } from './pages/prespuesto/prespuesto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { CabeceraConAccionesComponent } from './components/cabecera-con-acciones/cabecera-con-acciones.component';

import { ChartsModule } from 'ng2-charts';
import { FormularioComponent } from './pages/prespuesto/formulario/formulario.component';
import { RegistroListadoComponent } from './pages/prespuesto/registro-listado/registro-listado.component';
import { RegistroActualComponent } from './pages/prespuesto/registro-actual/registro-actual.component';
import { RegistroEstadisticsChartComponent } from './pages/prespuesto/registro-estadistics-chart/registro-estadistics-chart.component';
import { PresSelectComponent } from './components/pres-select/pres-select.component';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PrespuestoComponent,
    NavbarComponent,
    GalleryComponent,
    FormularioComponent,
    CotizacionComponent,
    PrespuestoComponent,
    CabeceraConAccionesComponent,
    RegistroActualComponent,
    RegistroListadoComponent,
    RegistroEstadisticsChartComponent,
    PresSelectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true,
    }),
    ToastContainerModule,
  ],
  providers: [
    {
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => PresSelectComponent),
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
