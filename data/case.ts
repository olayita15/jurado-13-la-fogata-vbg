export type Team = 'fiscalia' | 'defensa' | 'jurado'

export const hearing = {
  number: 'Expediente pedagógico 01–VBG',
  title: 'El chat que llegó a la asamblea',
  court: 'Tribunal pedagógico independiente',
  claimant: 'Camila Giraldo · Persona denunciante',
  respondent: 'Mateo Ríos · Persona denunciada'
}

export const teams: Record<Team, { name: string; subtitle: string; icon: string; instruction: string; focus: string[] }> = {
  fiscalia: { name: 'Fiscalía', subtitle: 'Representación de la denuncia', icon: 'i-lucide-scale', instruction: 'Presenten el Acta de Acusación como una hipótesis que debe sustentarse. Organicen los hechos, expliquen por qué podrían ser relevantes y soliciten una decisión proporcional.', focus: ['Distingan hechos denunciados de interpretaciones.', 'Expliquen el posible impacto sobre autonomía y participación.', 'Soliciten una medida de reparación y no repetición, no una sanción automática.'] },
  defensa: { name: 'Defensa', subtitle: 'Garantías de la persona denunciada', icon: 'i-lucide-shield-check', instruction: 'Respondan a cada hecho planteado en el Acta sin descalificar a Camila. Examinen qué está acreditado, qué requiere contraste y qué respuesta o reparación podrían reconocer.', focus: ['No usen estereotipos ni vida íntima para desacreditar.', 'Diferencien desacuerdo, daño y posible violencia.', 'Protejan las garantías de Mateo sin normalizar conductas de control.'] },
  jurado: { name: 'Jurado', subtitle: 'Instancia decisoria', icon: 'i-lucide-landmark', instruction: 'Escuchen ambas posiciones, contrasten los hechos y redacten una decisión pedagógica razonada. La decisión debe explicar qué se considera establecido, qué no y por qué.', focus: ['Apliquen enfoque de género y debido proceso.', 'Eviten exigir una “prueba perfecta” para hechos privados.', 'Propongan medidas proporcionales de cuidado, reparación y no repetición.'] }
}

export const accusation = {
  date: '18 de agosto de 2026',
  background: 'Considerando que las relaciones afectivas pueden convertirse en espacios donde se presentan conductas de control, presión psicológica y limitación de la autonomía, Camila Giraldo acusa a Mateo Ríos, su pareja durante los últimos dos años, de ejercer comportamientos que considera violentos y que han afectado tanto su vida personal como su participación política.',
  facts: [
    { title: 'Conflictos relacionados con una expareja', text: 'La expareja de Camila, Antonio, es también su dirección política. Las reuniones de su organización se realizan habitualmente en la casa de él y, debido a que terminan tarde, Camila suele quedarse allí por razones de seguridad. Mateo ha manifestado reiteradamente su incomodidad con esta situación, pues considera que la cercanía entre ambos sobrepasa los límites de la relación. Camila sostiene que se trata de una expresión de inseguridad de Mateo y que, aunque comprende que pueda sentir celos o desconfianza, esto no justifica que cuestione sus decisiones ni que intente condicionar su participación política.' },
    { title: 'Discusiones y exigencias de confianza', text: 'En medio de estos conflictos, Mateo le ha pedido a Camila que le muestre conversaciones privadas para comprobar que no le oculta nada. Ante la negativa de ella, ha cuestionado su disposición a construir confianza en la relación. Camila considera que estas exigencias vulneran su intimidad; Mateo, por su parte, sostiene que sus inquietudes surgen de situaciones que le generan desconfianza.' },
    { title: 'Deterioro de la relación y de los espacios compartidos', text: 'Ambos han intentado resolver sus diferencias y mejorar la relación, pero Camila afirma que las discusiones se han vuelto cada vez más frecuentes y que han aparecido nuevas conductas que percibe como controladoras. También manifiesta preocupación por la posibilidad de que los conflictos personales afecten su tranquilidad y su participación en los espacios políticos que comparte con otras personas.' }
  ],
  request: 'Camila solicita que la organización de Mateo examine los hechos, escuche a las partes y determine si las conductas señaladas constituyen formas de violencia basada en género. En caso de establecerse responsabilidad, solicita que Mateo reciba una sanción de carácter pedagógico, orientada a reconocer las conductas problemáticas, comprender sus consecuencias y garantizar que no se repitan. El caso se presenta para que el jurado valore los hechos, considere los argumentos de ambas partes y emita un veredicto fundamentado.'
}

export const hearingRules = [
  { time: '10 min', title: 'Primera exposición', text: 'Fiscalía expone primero y después la Defensa. Cada parte puede usar menos tiempo, pero no más.' },
  { time: '5 min', title: 'Segunda exposición', text: 'Fiscalía y Defensa presentan una segunda intervención, respetando el mismo orden.' },
  { time: '3 + 3 min', title: 'Interrogatorio de testigos', text: 'Se interroga alternadamente. Cada parte tiene 3 minutos para sus propios testigos y 3 minutos para los testigos de la otra parte.' },
  { time: '5 min', title: 'Receso de preparación', text: 'Después de todos los interrogatorios, las partes preparan su argumentación final.' },
  { time: '5 min', title: 'Argumentación final', text: 'Fiscalía y Defensa presentan sus conclusiones finales ante el jurado.' },
  { time: '10 min', title: 'Deliberación del jurado', text: 'El jurado decide si encuentra culpable o inocente al acusado y sustenta su posición con los elementos del juicio.' }
]

export const judicialPowers = [
  'El juez decide si acepta o no las protestas presentadas por Fiscalía o Defensa.',
  'Toda variación de tiempos, recesos o tiempos adicionales será decidida por el juez.',
  'El veredicto será leído por una persona del jurado.',
  'El juez hará un resumen de los elementos centrales, retomará la decisión del jurado y, con base en ella, dictará sentencia.'
]

export type Evidence = { code: string; title: string; format: 'chat' | 'testimony' | 'publication' | 'context'; source: string; text: string; messages?: { speaker: string; text: string }[] }

const camilaWitness: Evidence = { code: 'F-00', title: 'Testimonio de Camila Giraldo', format: 'testimony', source: 'Testigo de Fiscalía · Persona denunciante', text: 'Camila explicará cómo vivió las discusiones sobre sus reuniones, las solicitudes de revisar conversaciones y el temor de que el conflicto afectara su participación política. Debe declarar sobre lo que hizo, escuchó o recibió directamente; no sobre las intenciones que atribuye a Mateo.' }
const mateoWitness: Evidence = { code: 'D-00', title: 'Testimonio de Mateo Ríos', format: 'testimony', source: 'Testigo de Defensa · Persona denunciada', text: 'Mateo explicará por qué la cercanía entre Camila y su expareja le generaba desconfianza, qué alternativas creía posibles y cómo entiende sus solicitudes de confianza. Debe responder sobre sus propias palabras y decisiones, sin atribuir a Camila motivaciones que no pueda sustentar.' }

export const evidenceByTeam: Record<Team, Evidence[]> = {
  fiscalia: [
    camilaWitness,
    { code: 'F-01', title: 'Información compartimentada', format: 'chat', source: 'Chat privado entre Camila y Mateo', text: 'Conversación posterior a una solicitud de Mateo para revisar el celular de Camila.', messages: [{ speaker: 'Mateo', text: 'Si no me ocultas nada, no debería ser tan difícil mostrarme las conversaciones.' }, { speaker: 'Camila', text: 'No puedo mostrarte esas conversaciones. Hay información de compañeras y procesos de mi organización que es compartimentada. Te lo he dicho desde antes.' }, { speaker: 'Mateo', text: 'Entonces al menos dime qué tanto hablas con tu ex.' }, { speaker: 'Camila', text: 'Puedo hablar de nuestra relación, pero no voy a romper la confianza de otras personas para demostrarte algo.' }] },
    { code: 'F-02', title: 'Iniciativa presentada sin atribución', format: 'publication', source: 'Borrador de Camila, publicación de la organización de Mateo y chat posterior', text: 'Camila aporta un borrador fechado cuatro días antes de que la organización de Mateo publicara la iniciativa “Escuela de formación y cuidado”. El texto público conserva la estructura, los objetivos y varias formulaciones del borrador. Camila afirma que se lo compartió a Mateo para pedirle opinión. Mateo responde que desarrolló la propuesta con ideas de conversaciones políticas compartidas y que no creyó necesario mencionarla.' },
    { code: 'F-03', title: 'La denuncia y el intento de agresión', format: 'testimony', source: 'Declaración de Valentina, persona presente durante el hecho', text: '“Yo estaba saliendo de la casa y los vi discutiendo. Mateo se fue hacia él muy rápido, como para empujarlo o pegarle, no sé… Camila se metió de una. Yo no vi que el golpe le llegara, pero sí vi que ella quedó muy asustada y que él estaba muy alterado.”' },
    { code: 'F-04', title: 'La dirección política y las ausencias', format: 'testimony', source: 'Declaraciones de dos amistades cercanas de Camila', text: '“Camila sí cancelaba planes por las reuniones; a veces llegaba cansadísima. Pero, heeem, también me decía que con Mateo podía descansar de todo eso.” — Laura, amiga de Camila.\n\n“Yo la escuché decirle a Mateo que no era que no quisiera verlo, sino que tenía responsabilidades de dirección. Él decía que siempre quedaba de último; eso fue lo que yo escuché, pues.” — Nicolás, amigo de Camila.' }
  ],
  defensa: [
    mateoWitness,
    { code: 'D-01', title: 'La noche en casa de la expareja', format: 'chat', source: 'Chat entre Mateo y Camila', text: 'Conversación sobre seguridad, reuniones políticas y la estancia de Camila en la casa de su expareja.', messages: [{ speaker: 'Mateo', text: 'No me molesta que tengas reuniones. Me molesta que siempre termines durmiendo en la casa de tu ex y que cuando te digo cómo me siento me respondas que tengo que deconstruirme.' }, { speaker: 'Camila', text: '¿Qué quieres que haga? ¿Que me vaya sola a las dos de la mañana para que tú estés tranquilo?' }, { speaker: 'Mateo', text: 'No. Quiero que podamos hablar de otras opciones sin que me trates como un machista por plantearlo.' }, { speaker: 'Camila', text: 'Tu inseguridad no puede convertirse en una obligación para mí.' }] },
    { code: 'D-02', title: '“Eso lo dije yo primero”', format: 'publication', source: 'Publicación de Mateo y conversación privada posterior', text: 'Mateo publica una reflexión sobre movimiento estudiantil, organización popular y luchas de género. Camila le dice que varias ideas y formulaciones son similares a las que ella le compartió. Mateo responde que las ideas no son propiedad de ella y que también puede defender aquello con lo que está de acuerdo. Camila sostiene que omitió deliberadamente reconocer su aporte.' },
    { code: 'D-03', title: 'La cercanía con el ex no era solamente logística', format: 'testimony', source: 'Declaraciones de dos integrantes de la universidad', text: '“Sí los vi abrazados en el encuentro. Fue un abrazo largo, pues, y luego se quedaron hablando aparte. Yo no sé qué relación tenían ni escuché lo que dijeron.” — Sara, estudiante.\n\n“Él la buscaba mucho después de las reuniones. A veces Camila ya estaba recogiendo sus cosas y él seguía hablándole. Pero no, no puedo decir que fueran pareja ni que hubiera pasado algo entre ellos.” — Julián, estudiante.' },
    { code: 'D-04', title: '“No te estoy pidiendo permiso”', format: 'chat', source: 'Chat posterior a una discusión sobre relación abierta', text: 'Conversación sobre la propuesta de transformar el acuerdo de exclusividad.', messages: [{ speaker: 'Mateo', text: 'Yo te amo, pero no quiero una relación abierta. No quiero que me convenzas de que estoy deconstruido solamente si acepto eso.' }, { speaker: 'Camila', text: 'No te estoy pidiendo permiso para pensar diferente. Te estoy diciendo que no quiero reproducir una relación tradicional.' }, { speaker: 'Mateo', text: 'Pero estamos hablando de nuestra relación, no solo de tu postura política.' }, { speaker: 'Camila', text: 'Entonces tendrás que decidir si puedes estar con alguien que no piensa vivir el amor como tú.' }] }
  ],
  jurado: [
    { code: 'J-01', title: 'La ruptura y el acercamiento con otra persona', format: 'context', source: 'Mensajes aportados por Mateo y explicación de Camila', text: 'Mateo presenta mensajes en los que Camila dice que necesita terminar la relación y, días después, propone intentarlo de nuevo. Él afirma que durante ese periodo Camila tuvo un acercamiento romántico con otra persona y que, al retomar la relación, no se le contó todo. Camila sostiene que la relación había terminado y que no debía mantener los mismos acuerdos.' },
    { code: 'J-02', title: 'El costo político de la denuncia', format: 'context', source: 'Registro de conversaciones entre integrantes de ambas organizaciones', text: 'Algunas personas respaldan la solicitud de una sanción pedagógica; otras advierten que Mateo también es un dirigente estudiantil conocido y debe responder. En su facultad circulan comentarios sobre el caso. Camila dice que no es solo un asunto privado; Mateo teme que la denuncia afecte su reputación antes de escucharse su versión.' },
    { code: 'J-03', title: 'Hoja de contraste para el jurado', format: 'publication', source: 'Secretaría del Tribunal pedagógico', text: 'La Secretaría recuerda que chats y testimonios son piezas ficticias con alcances distintos. Una conversación muestra palabras y contexto limitado; un testimonio aporta una percepción; un hecho relevante debe contrastarse con otras piezas. El jurado no debe decidir por estereotipos ni por el prestigio político de las partes.' }
  ]
}
