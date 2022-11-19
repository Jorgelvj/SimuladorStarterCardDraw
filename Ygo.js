function contagem() {
    let qtdCards = window.document.getElementById('cardsDeck')
    let qtdStarters = window.document.getElementById('cardsIniciadores')
    let res = window.document.getElementById('res')

    if (qtdCards.value.length == 0 || qtdStarters.value.length == 0) {
        alert('Faltam dados')
    }
    //Indo primeiro n=5 i = 0

    var N = Number(qtdCards.value)
    var fatorialN = N
    
    for (let contador = 1; contador < N; contador++) {
        fatorialN = fatorialN * ( N - contador)
    }

    var M = Number(qtdStarters.value)
    var fatorialM = M
    
    for (let contador1 = 1; contador1 < M; contador1++) {
        fatorialM = fatorialM * ( M - contador1)
    }

    
    var Pri0 = Number(1)

    var NmenosM = Number(N - M)
    var fatorialNmenosM = NmenosM

    for (let i3 = 1; i3 < NmenosM; i3++) {
        fatorialNmenosM = fatorialNmenosM * ( NmenosM - i3)
    }

    var A0 = Number(NmenosM - 5)
    var fatorialA0 = A0

    for (let i4 = 1; i4 < A0; i4++) {
       fatorialA0 = fatorialA0 * ( A0 - i4)
    }

    var Sec0 = Number(fatorialNmenosM / (120 * fatorialA0))

    var Nmenos_n = Number(N - 5)
    var fatorialNmenos_n = Nmenos_n

    for (let i5 = 1; i5 < Nmenos_n; i5++) {
        fatorialNmenos_n = fatorialNmenos_n * ( Nmenos_n - i5)
     }

    var TecTurno1 = Number(fatorialN / (120 * fatorialNmenos_n))

    var Prob_n5_i0 = ((Pri0 * Sec0)/TecTurno1) * 100 

     // Até aqui funciona, testado.

    // Indo primeiro n = 5 i = 1

    var M_menos_1 = Number(M -1)
    var fatorialM_menos_1 = M_menos_1

    for (let i6 = 1; i6 < M_menos_1; i6++) {
        fatorialM_menos_1 = fatorialM_menos_1 * ( M_menos_1 - i6)
     }

    var Pri1 = fatorialM / (fatorialM_menos_1)

    var A1 = Number((N-M) -4)
    var fatorialA1 = A1

    for (let i7 = 1; i7 < A1 ; i7++){
        fatorialA1 = fatorialA1 * (A1 - i7)
    }

    var Sec1 = fatorialNmenosM/(24*fatorialA1)

    var Prob_n5_i1 = ((Pri1 * Sec1)/TecTurno1) * 100

    // Até aqui funciona \o/
    
    //Indo primeiro n = 5 i = 2

    var M_menos_2 = Number(M - 2)
    var fatorial_M_menos_2 = M_menos_2

    for (let i8 = 1; i8 < M_menos_2; i8++) {
        fatorial_M_menos_2 = fatorial_M_menos_2 * (M_menos_2 -i8)
    }
    
    var Pri2 = fatorialM / (2 * (fatorial_M_menos_2))

    var A2 = Number((N-M) - 3)
    var fatorial_A2 = A2

    for (let i9 = 1; i9 < A2; i9++){
        fatorial_A2 = fatorial_A2 * (A2 - i9)
    }

    var Sec2 = fatorialNmenosM/(6*fatorial_A2)

    var Prob_n5_i2 = ((Pri2 * Sec2)/TecTurno1) * 100

    //Feito até aqui tudo funciona

    // n = 5 e i =3

    var M_menos_3 = Number(M - 3)
    var fatorial_M_menos_3 = M_menos_3

    for (let i10 = 1; i10< M_menos_3; i10++) {
        fatorial_M_menos_3 = fatorial_M_menos_3 * (M_menos_3 - i10)
    }

    var Pri3 = fatorialM / (6*fatorial_M_menos_3)

    var A3 = Number((N-M) -2)
    var fatorialA3 = A3

    for( let i11 = 1; i11 <A3; i11++) {
        fatorialA3 = fatorialA3 * (A3 - i11)
    }

    var Sec3 = fatorialNmenosM / (2 * fatorialA3)

    var Prob_n5_i3 = ((Pri3 * Sec3)/TecTurno1) * 100

    // Até aqui funciona o código para n = 5

    turno1.innerHTML=`Primeiro turno`
    res_n5_i0.innerHTML=`${Prob_n5_i0.toFixed(2)}% de probabilidade de <strong>não tirar</strong> uma Starter`
    res_n5_i1.innerHTML=`${Prob_n5_i1.toFixed(2)}% de probabilidade de <strong>tirar uma</strong> Starter`
    res_n5_i2.innerHTML=`${Prob_n5_i2.toFixed(2)}% de probabilidade de <strong>tirar duas</strong> Starters`
    res_n5_i3.innerHTML=`${Prob_n5_i3.toFixed(2)}% de probabilidade de <strong>tirar três</strong> Starters`
    

// Aqui começa o n6 

    // Tec2

    var N_menos_6 = Number(N -6)
    var fatorialN_menos_6 = N_menos_6

    for (let i20 = 1; i20 < N_menos_6; i20++){
        fatorialN_menos_6 = fatorialN_menos_6 * (N_menos_6 - i20)
    }
    
    var TecTurno2 = fatorialN / (720 * fatorialN_menos_6)

    // n=6 i = 0

    var pri_i0 = Number(1)

    var B0 = Number(N-M ) - 6
    var fatorial_B0 = B0

    for( let i21 = 1; i21 <B0; i21++){
        fatorial_B0 = fatorial_B0 * (B0 - i21)
    }

    var sec_i0 = fatorialNmenosM / (720 * fatorial_B0)

    var prob_n6_i0 = ((pri_i0 * sec_i0)/TecTurno2) *100

   //Até aqui Ok

   // n=6 i=1

   var pri_i1 = fatorialM / fatorialM_menos_1

   var B1 = Number(N-M) - 5
   var fatorial_B1 = B1

   for(let i22 = 1; i22 <B1; i22++){
    fatorial_B1 = fatorial_B1 * (B1 - i22)
   }

   var sec_i1 = fatorialNmenosM / (120 * fatorial_B1)

   var prob_n6_i1 = ((pri_i1*sec_i1)/TecTurno2)*100

   //Até aqui Ok

   var pri_i2 = fatorialM /(2*fatorial_M_menos_2)

   var B2 = Number(N-M) - 4
   var fatorial_B2 = B2

   for(let i23 = 1; i23<B2; i23++){
    fatorial_B2 = fatorial_B2 * (B2 - i23)
   }
   
   var sec_i2 = fatorialNmenosM / (24*fatorial_B2)

   var prob_n6_i2 = ((pri_i2*sec_i2)/TecTurno2) * 100

   //Até aqui tudo certo
   
   var pri_i3 = fatorialM/(6*fatorial_M_menos_3)

   var sec_i3 = fatorialNmenosM / (6 * fatorial_A2)

   var prob_n6_i3 = ((pri_i3 * sec_i3)/TecTurno2 ) * 100


   turno2.innerHTML=`Segundo turno`
   res_n6_i0.innerHTML=`${prob_n6_i0.toFixed(2)}% de probabilidade de <strong>não ter tirado</strong> uma Starter`
   res_n6_i1.innerHTML=`${prob_n6_i1.toFixed(2)}% de probabilidade de <strong>tirar uma</strong> Starter`
   res_n6_i2.innerHTML=`${prob_n6_i2.toFixed(2)}% de probabilidade de <strong>tirar duas</strong> Starters`
   res_n6_i3.innerHTML=`${prob_n6_i3.toFixed(2)}% de probabilidade de <strong>tirar três</strong> Starters`

    }
