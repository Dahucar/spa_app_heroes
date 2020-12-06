## Descripcón. 

Este componente obtendra la funcion que permite modicar el contedio del contexto. mediante el "dispatch" (Puede ser cualquier nombre) con el que se enviara la informacion. 

ya que es mediante el reducer que "conectados" ambos elementos. donde el useReducer tendra como parametro los diferentes casos a evaluar (ya sea agregar, eliminar u otras opciones)

y el AuthContext.Provider resivirá la desestructuración de la información del reducer creado. para compartirla a los elementos de la navegacoón.