// Include this line at the top of your scripts
// See the documentation for more information:
// 		https://lab.florianschwarz.net/PennController/wiki/documentation/

var progressBarText = "progrès"
PennController.ResetPrefix(null);
// PennController.PreloadZip("https://web-risc.ens.fr/~rdudley/public_html/iifd/judgment/cards/audiofiles.zip");
// PennController.PreloadZip("https://web-risc.ens.fr/~rdudley/public_html/iifd/judgment/cards/imagefiles.zip");



PennController.AddHost("http://web-risc.ens.fr/~rdudley/iifd/judgment/");
PennController.Sequence( "counter","welcome",//"intro1", "intro2", "intro3","intro4","intro5", "intro6","intro8", "intro9", "intro10","intro7", "practice1", "practice2", "practice3", "practice4", "practice5", "practice6", "intro11",
                  rshuffle("trialE5",
                           // "trialC5",
                           // "trialD3",
                           // "trialD1",
                           // "trialA4",
                           // "trialB3-b",
                           // "trialA3",
                           // "trialE2",
                           // "trialA5",
                           "trialA1",
                           // "trialC3",
                           // "trialE3",
                           // "trialE1",
                           // "trialD5",
                           // "trialC1",
                           // "trialB3-a",
                           // "trialC2",
                           // "trialE4",
                           // "trialD4",
                           // "trialD2",
                           // "trialA2",
                           "trialC4"), "intro12", "subject_info", "send"
);
PennController.SetCounter("counter");
PennController.SendResults( "send" );
PennController( "subject_info" ,
    newTextInput( "name" , "ton prenom")
        .settings.log() // Record the participant's feedback
        .settings.lines(0) // Unlimited number of lines
        .print()
    ,
    newButton("validate", "Envoyer les resultats")
        .settings.center()
        .print()
        .wait()
);
PennController( "welcome" ,
    newText( "message1" , "Aujourd'hui vous nous aiderez en servant de comparatif adulte à la compréhension du langage chez les enfants.")
        .settings.center()
        .print()
    ,
    newText( "message2" , "Pour cette raison, la tâche sera assez simple et adaptée à des enfants de 5 ans.")
        .settings.center()
        .print()
    ,
    newButton("start", "Commencer")
        .settings.center()
        .print()
        .wait()
);
// PennController("intro1" ,
//     newImage("first_picture","4_picture.png")
//       .settings.size(400,400)
//       .print()
//     ,
//     newAudio("1_hello_message.mp3")
//       .play()
//     ,
//     newTimer("delay5", 5000)
//       .start()
//       .wait()
//     ,
//     getImage("first_picture")
//       .remove()
//     ,
//     newImage("1_picture.png")
//       .settings.size(400,400)
//       .print()
//     ,
//     newTimer("delay2.6", 2600)
//       .start()
//       .wait()
//     ,
//     newButton("start", "Apprendre le jeu")
//         .settings.center()
//         .print()
//         .wait()
// );
// PennController("intro2",
//     newAudio("2_card_introduction.mp3")
//       .play()
//     ,
//     newTimer("delay4.5", 4500)
//       .start()
//       .wait()
//     ,
//     newImage("police_blue", "PolicemanBlue.png")
//       .settings.size(96,120)
//       .settings.css("border", "solid 1px black")
//     ,
//     newImage("dancer_blue", "DancerBlue.png")
//       .settings.size(96,120)
//       .settings.css("border", "solid 1px black")
//     ,
//     newImage("snowman_blue", "SnowmanBlue.png")
//       .settings.size(96,120)
//       .settings.css("border", "solid 1px black")
//     ,
//     newImage("police_red", "PolicemanRed.png")
//       .settings.size(96,120)
//       .settings.css("border", "solid 1px black")
//     ,
//     newImage("dancer_red", "DancerRed.png")
//       .settings.size(96,120)
//       .settings.css("border", "solid 1px black")
//     ,
//     newImage("snowman_red", "SnowmanRed.png")
//       .settings.size(96,120)
//       .settings.css("border", "solid 1px black")
//     ,
//     newImage("police_yellow", "PolicemanYellow.png")
//       .settings.size(96,120)
//       .settings.css("border", "solid 1px black")
//     ,
//     newImage("dancer_yellow", "DancerYellow.png")
//       .settings.size(96,120)
//       .settings.css("border", "solid 1px black")
//     ,
//     newImage("snowman_yellow", "SnowmanYellow.png")
//       .settings.size(96,120)
//       .settings.css("border", "solid 1px black")
//     ,
//     newImage("police_green", "PolicemanGreen.png")
//       .settings.size(96,120)
//       .settings.css("border", "solid 1px black")
//     ,
//     newImage("dancer_green", "DancerGreen.png")
//       .settings.size(96,120)
//       .settings.css("border", "solid 1px black")
//     ,
//     newImage("snowman_green", "SnowmanGreen.png")
//       .settings.size(96,120)
//       .settings.css("border", "solid 1px black")
//     ,
//     newCanvas("blues", 328, 120)
//       .settings.add(   0,    0, getImage("police_blue") )
//       .settings.add(   116,  0, getImage("dancer_blue") )
//       .settings.add(   232,  0, getImage("snowman_blue") )
//       .print()
//     ,
//     newTimer("delay7", 7000)
//       .start()
//       .wait()
//     ,
//     newCanvas("reds", 328, 120)
//       .settings.add(   0,    0, getImage("police_red") )
//       .settings.add(   116,  0, getImage("dancer_red") )
//       .settings.add(   232,  0, getImage("snowman_red") )
//       .print()
//     ,
//     newTimer("delay.8a", 800)
//       .start()
//       .wait()
//     ,
//     newCanvas("greens", 328, 120)
//       .settings.add(   0,    0, getImage("police_green") )
//       .settings.add(   116,  0, getImage("dancer_green") )
//       .settings.add(   232,  0, getImage("snowman_green") )
//       .print()
//     ,
//     newTimer("delay.8b", 800)
//       .start()
//       .wait()
//     ,
//     newCanvas("yellows", 328, 120)
//       .settings.add(   0,    0, getImage("police_yellow") )
//       .settings.add(   116,  0, getImage("dancer_yellow") )
//       .settings.add(   232,  0, getImage("snowman_yellow") )
//       .print()
//     ,
//     newButton("start", "Apprendre le jeu")
//         .settings.center()
//         .print()
//         .wait()
// );
// PennController("intro3",
//     newImage("3_picture.png")
//       .settings.size(400,400)
//       .print()
//     ,
//     newAudio("3_game_rules.mp3")
//       .play()
//       .wait()
//     ,
//     newButton("start", "Apprendre le jeu")
//         .settings.center()
//         .print()
//         .wait()
// );
// PennController("intro4",
//     newImage("4_picture.png")
//       .settings.size(400,400)
//       .print()
//     ,
//     newAudio("4_transition_to_task.mp3")
//       .play()
//       .wait()
//     ,
//     newButton("start", "Apprendre le jeu")
//         .settings.center()
//         .print()
//         .wait()
// );
// PennController("intro5",
//     newImage("5_picture.png")
//       .settings.size(400,400)
//       .print()
//     ,
//     newAudio("5_show_domain_give_clues.mp3")
//       .play()
//       .wait()
//     ,
//     newButton("start", "Apprendre le jeu")
//         .settings.center()
//         .print()
//         .wait()
// );
// PennController("intro6",
//     newImage("6_picture.png")
//       .settings.size(400,400)
//       .print()
//     ,
//     newAudio("6_task_instructions.mp3")
//       .play()
//       .wait()
//     ,
//     newButton("start", "Apprendre le jeu")
//         .settings.center()
//         .print()
//         .wait()
// );
// PennController("intro8",
//     newAudio("8_domain_then_click_for_clue.mp3")
//       .play()
//       .wait()
//     ,
//     newButton("start", "Cliquer ici pour l'indice")
//         .settings.center()
//         .print()
//         .wait()
// );
// PennController("intro9",
//     newAudio("9_good_click_happy.mp3")
//       .play()
//       .wait()
//     ,
//     newImage("happy", "smile.png")
//       .settings.size(192,192)
//     ,
//     newCanvas("judgment", 192, 192)
//       .settings.add(   0,  0, getImage("happy") )
//       .print()
//     ,
//     newSelector("choice")
//       .settings.add( getImage("happy") )
//       .wait()
// );
// PennController("intro10",
//     newAudio("10_bad_click_sad.mp3")
//       .play()
//       .wait()
//     ,
//     newImage("sad", "frown.png")
//       .settings.size(192,192)
//     ,
//     newCanvas("judgment", 192, 192)
//       .settings.add(   0,  0, getImage("sad") )
//       .print()
//     ,
//     newSelector("choice")
//       .settings.add( getImage("sad") )
//       .wait()
// );
// PennController("intro7",
//     newImage("7_picture.png")
//       .settings.size(400,400)
//       .print()
//     ,
//     newAudio("7_first_lets_practice.mp3")
//       .play()
//       .wait()
//     ,
//     newButton("start", "Commencer l'entraînement")
//         .settings.center()
//         .print()
//         .wait()
// );
// PennController("intro11",
//     newAudio("11_start_test_phase.mp3")
//       .play()
//       .wait()
//     ,
//     newButton("start", "Commencer le jeu")
//         .settings.center()
//         .print()
//         .wait()
// );
PennController("intro12",
    newImage("12_picture.png")
      .settings.size(400,400)
      .print()
    ,
    newAudio("12_congratulations.mp3")
      .play()
      .wait()
    ,
    //need a timer here
    newButton("subj_info", "Cliquer ici pour enregister les resultats")
      .settings.center()
      .print()
      .wait()
);
PennController("practice1",
    newTimer("trial_length1", 60000)
      .start()
    ,
    getTimer("trial_length1")
        .test.ended()
        .success( end() )
    ,
    newImage("practice1domainA", "DentistRed.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice1domainB", "DentistGreen.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice1domainC", "DentistYellow.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice1domainD", "NannyYellow.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice1domainE", "NannyRed.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("domain", 560, 160)
      .settings.add(   30,    20, getImage("practice1domainA") )
      .settings.add(   126,   20, getImage("practice1domainB") )
      .settings.add(   222,   20, getImage("practice1domainC") )
      .settings.add(   338,   20, getImage("practice1domainD") )
      .settings.add(   434,   20, getImage("practice1domainE") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice1domain", "DentistRGY_NannyYR.mp3")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "Cliquer ici pour l'indice")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
          //ACTION: change this to french
    newAudio("practice1clue", "NannyYellow.mp3")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("happy", "smile.png")
      .settings.size(96,96)
    ,
    newImage("sad", "frown.png")
      .settings.size(96,96)
    ,
    newImage("practice1judgmentA", "NannyYellow.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("judgment", 596, 220)
      .settings.add(   250,  10,   getImage("practice1judgmentA") )
      .settings.add(   144,  178, getImage("happy") )
      .settings.add(   336,  178, getImage("sad") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("happy") , getImage("sad") )
      .settings.log()
      .wait()
    ,
    newAudio("positive", "practice1_feedback_positive.mp3")
    ,
    newAudio("negative", "practice1_feedback_negative.mp3")
    ,
    getSelector("choice")
        .test.selected( getImage("happy") )
        .success(
            getAudio("positive")
                .play()
                .wait()
        )
        .failure(
            getAudio("negative")
                .play()
                .wait()
        )
    ,
    newButton("next", "Continuer")
        .settings.center()
        .print()
        .wait()
);
PennController("practice2",
    newTimer("trial_length2", 60000)
      .start()
    ,
    getTimer("trial_length2")
        .test.ended()
        .success( end() )
    ,
    newImage("practice2domainA", "DetectiveRed.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice2domainB", "DetectiveGreen.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice2domainC", "DetectiveYellow.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice2domainD", "DentistRed.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice2domainE", "DentistYellow.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("domain", 560, 160)
      .settings.add(   30,    20, getImage("practice2domainA") )
      .settings.add(   126,   20, getImage("practice2domainB") )
      .settings.add(   222,   20, getImage("practice2domainC") )
      .settings.add(   338,   20, getImage("practice2domainD") )
      .settings.add(   434,   20, getImage("practice2domainE") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice2domain", "DetectiveRGY_DentistRY.mp3")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "Cliquer ici pour l'indice")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
          //ACTION: change this to french
    newAudio("practice2clue", "DetectiveGreen.mp3")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("happy", "smile.png")
      .settings.size(96,96)
    ,
    newImage("sad", "frown.png")
      .settings.size(96,96)
    ,
    newImage("practice2judgmentA", "DentistRed.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice2judgmentB", "DentistYellow.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("judgment", 576, 220)
      .settings.add(   202,  10,  getImage("practice2judgmentA") )
      .settings.add(   298,  10,  getImage("practice2judgmentB") )
      .settings.add(   144,  178, getImage("happy") )
      .settings.add(   336,  178, getImage("sad") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("happy") , getImage("sad") )
      .settings.log()
      .wait()
    ,
    newAudio("positive", "practice2_feedback_positive.mp3")
    ,
    newAudio("negative", "practice2_feedback_negative.mp3")
    ,
    getSelector("choice")
        .test.selected( getImage("sad") )
        .success(
            getAudio("positive")
                .play()
                .wait()
        )
        .failure(
            getAudio("negative")
                .play()
                .wait()
        )
    ,
    newButton("next", "Continuer")
        .settings.center()
        .print()
        .wait()
);
PennController("practice3",
    newTimer("trial_length3", 60000)
      .start()
    ,
    getTimer("trial_length3")
        .test.ended()
        .success( end() )
    ,
    newImage("practice3domainA", "ReporterBlue.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice3domainB", "ReporterYellow.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice3domainC", "ReporterRed.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice3domainD", "FiremanGreen.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice3domainE", "FiremanRed.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("domain", 560, 160)
      .settings.add(   30,    20, getImage("practice3domainA") )
      .settings.add(   126,   20, getImage("practice3domainB") )
      .settings.add(   222,   20, getImage("practice3domainC") )
      .settings.add(   338,   20, getImage("practice3domainD") )
      .settings.add(   434,   20, getImage("practice3domainE") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice3domain", "ReporterBYR_FiremanGR.mp3")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "Cliquer ici pour l'indice")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
          //ACTION: change this to french
    newAudio("practice3clue", "ReporterRed.mp3")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("happy", "smile.png")
      .settings.size(96,96)
    ,
    newImage("sad", "frown.png")
      .settings.size(96,96)
    ,
    newImage("practice3judgmentA", "ReporterBlue.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice3judgmentB", "ReporterYellow.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice3judgmentC", "ReporterRed.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("judgment", 576, 220)
      .settings.add(   154,  10,  getImage("practice3judgmentA") )
      .settings.add(   250,  10,  getImage("practice3judgmentB") )
      .settings.add(   346,  10,  getImage("practice3judgmentC") )
      .settings.add(   144,  178, getImage("happy") )
      .settings.add(   336,  178, getImage("sad") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("happy") , getImage("sad") )
      .settings.log()
      .wait()
    ,
    newAudio("positive", "practice3_feedback_positive.mp3")
    ,
    newAudio("negative", "practice3_feedback_negative.mp3")
    ,
    getSelector("choice")
        .test.selected( getImage("happy") )
        .success(
            getAudio("positive")
                .play()
                .wait()
        )
        .failure(
            getAudio("negative")
                .play()
                .wait()
        )
    ,
    newButton("next", "Continuer")
        .settings.center()
        .print()
        .wait()
);
PennController("practice4",
    newTimer("trial_length4", 60000)
      .start()
    ,
    getTimer("trial_length4")
        .test.ended()
        .success( end() )
    ,
    newImage("practice4domainA", "NannyGreen.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice4domainB", "NannyRed.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice4domainC", "NannyBlue.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice4domainD", "DetectiveYellow.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice4domainE", "DetectiveBlue.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("domain", 560, 160)
      .settings.add(   30,    20, getImage("practice4domainA") )
      .settings.add(   126,   20, getImage("practice4domainB") )
      .settings.add(   222,   20, getImage("practice4domainC") )
      .settings.add(   338,   20, getImage("practice4domainD") )
      .settings.add(   434,   20, getImage("practice4domainE") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice4domain", "NannyGRB_DetectiveYB.mp3")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "Cliquer ici pour l'indice")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
          //ACTION: change this to french
    newAudio("practice4clue", "NannyOrDetective.mp3")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("happy", "smile.png")
      .settings.size(96,96)
    ,
    newImage("sad", "frown.png")
      .settings.size(96,96)
    ,
    newImage("practice4judgmentA", "DetectiveYellow.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice4judgmentB", "DetectiveBlue.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("judgment", 576, 220)
      .settings.add(   202,  10,  getImage("practice4judgmentA") )
      .settings.add(   298,  10,  getImage("practice4judgmentB") )
      .settings.add(   144,  178, getImage("happy") )
      .settings.add(   336,  178, getImage("sad") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("happy") , getImage("sad") )
      .settings.log()
      .wait()
    ,
    newAudio("positive", "practice4_feedback_positive.mp3")
    ,
    newAudio("negative", "practice4_feedback_negative.mp3")
    ,
    getSelector("choice")
        .test.selected( getImage("happy") )
        .success(
            getAudio("positive")
                .play()
                .wait()
        )
        .failure(
            getAudio("negative")
                .play()
                .wait()
        )
    ,
    newButton("next", "Continuer")
        .settings.center()
        .print()
        .wait()
);
PennController("practice5",
    newTimer("trial_length5", 60000)
      .start()
    ,
    getTimer("trial_length5")
        .test.ended()
        .success( end() )
    ,
    newImage("practice5domainA", "DentistYellow.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice5domainB", "DentistGreen.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice5domainC", "DentistBlue.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice5domainD", "FiremanRed.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice5domainE", "FiremanYellow.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("domain", 560, 160)
      .settings.add(   30,    20, getImage("practice5domainA") )
      .settings.add(   126,   20, getImage("practice5domainB") )
      .settings.add(   222,   20, getImage("practice5domainC") )
      .settings.add(   338,   20, getImage("practice5domainD") )
      .settings.add(   434,   20, getImage("practice5domainE") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice5domain", "DentistYGB_FiremanRY.mp3")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "Cliquer ici pour l'indice")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
          //ACTION: change this to french
    newAudio("practice5clue", "DentistOrFireman.mp3")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("happy", "smile.png")
      .settings.size(96,96)
    ,
    newImage("sad", "frown.png")
      .settings.size(96,96)
    ,
    newImage("practice5judgmentA", "DentistGreen.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("judgment", 576, 220)
      .settings.add(   250,  10,  getImage("practice5judgmentA") )
      .settings.add(   144,  178, getImage("happy") )
      .settings.add(   336,  178, getImage("sad") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("happy") , getImage("sad") )
      .settings.log()
      .wait()
    ,
    newAudio("positive", "practice5_feedback_positive.mp3")
    ,
    newAudio("negative", "practice5_feedback_negative.mp3")
    ,
    getSelector("choice")
        .test.selected( getImage("sad") )
        .success(
            getAudio("positive")
                .play()
                .wait()
        )
        .failure(
            getAudio("negative")
                .play()
                .wait()
        )
    ,
    newButton("next", "Continuer")
        .settings.center()
        .print()
        .wait()
);
PennController("practice6",
    newTimer("trial_length6", 60000)
      .start()
    ,
    getTimer("trial_length6")
        .test.ended()
        .success( end() )
    ,
    newImage("practice6domainA", "ReporterGreen.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice6domainB", "ReporterBlue.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice6domainC", "ReporterYellow.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice6domainD", "NannyRed.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice6domainE", "NannyBlue.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("domain", 560, 160)
      .settings.add(   30,    20, getImage("practice6domainA") )
      .settings.add(   126,   20, getImage("practice6domainB") )
      .settings.add(   222,   20, getImage("practice6domainC") )
      .settings.add(   338,   20, getImage("practice6domainD") )
      .settings.add(   434,   20, getImage("practice6domainE") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice6domain", "ReporterGBY_NannyRB.mp3")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "Cliquer ici pour l'indice")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
          //ACTION: change this to french
    newAudio("practice6clue", "ReporterGreen_AlsoNannyRed.mp3")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("happy", "smile.png")
      .settings.size(96,96)
    ,
    newImage("sad", "frown.png")
      .settings.size(96,96)
    ,
    newImage("practice6judgmentA", "ReporterGreen.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice6judgmentB", "NannyRed.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice6judgmentC", "NannyBlue.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("judgment", 576, 220)
      .settings.add(   154,  10,  getImage("practice6judgmentA") )
      .settings.add(   250,  10,  getImage("practice6judgmentB") )
      .settings.add(   346,  10,  getImage("practice6judgmentC") )
      .settings.add(   144,  178, getImage("happy") )
      .settings.add(   336,  178, getImage("sad") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("happy") , getImage("sad") )
      .settings.log()
      .wait()
    ,
    newAudio("positive", "practice6_feedback_positive.mp3")
    ,
    newAudio("negative", "practice6_feedback_negative.mp3")
    ,
    getSelector("choice")
        .test.selected( getImage("happy") )
        .success(
            getAudio("positive")
                .play()
                .wait()
        )
        .failure(
            getAudio("negative")
                .play()
                .wait()
        )
    ,
    newButton("next", "Continuer")
        .settings.center()
        .print()
        .wait()
);
PennController.Template("premiseA.image1.csv",
    row => PennController("trialA1",
        newTimer("trial_length.a1", 60000)
          .start()
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        getTimer("trial_length.a1")
          .test.ended()
          .success( end() )
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   154,   10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   346,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseC.image1.csv",
    row => PennController("trialC1",
        newTimer("trial_length.c1", 60000)
          .start()
        ,
        getTimer("trial_length.c1")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
    .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
    .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   154,  10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   346,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseD.image1.csv",
    row => PennController("trialD1",
        newTimer("trial_length.d1", 60000)
          .start()
        ,
        getTimer("trial_length.d1")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   154,  10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   346,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseE.image1.csv",
    row => PennController("trialE1",
        newTimer("trial_length.e1", 60000)
          .start()
        ,
        getTimer("trial_length.e1")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   154,   10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   346,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseA.image2.csv",
    row => PennController("trialA2",
        newTimer("trial_length.a2", 60000)
          .start()
        ,
        getTimer("trial_length.a2")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   154,  10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   346,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseC.image2.csv",
    row => PennController("trialC2",
        newTimer("trial_length.c2", 60000)
          .start()
        ,
        getTimer("trial_length.c2")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   154,  10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   346,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseD.image2.csv",
    row => PennController("trialD2",
        newTimer("trial_length.d2", 60000)
          .start()
        ,
        getTimer("trial_length.d2")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   154,  10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   346,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseE.image2.csv",
    row => PennController("trialE2",
        newTimer("trial_length.e2", 60000)
          .start()
        ,
        getTimer("trial_length.e2")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   154,  10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   346,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseA.image3.csv",
    row => PennController("trialA3",
        newTimer("trial_length.a3", 60000)
          .start()
        ,
        getTimer("trial_length.a3")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(96,120)
        ,
        newImage("judgmentImage5", row.judgmentImage5)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   58,    10, getImage("judgmentImage1") )
          .settings.add(   154,   10, getImage("judgmentImage2") )
          .settings.add(   250,   10, getImage("judgmentImage3") )
          .settings.add(   346,   10, getImage("judgmentImage4") )
          .settings.add(   442,   10, getImage("judgmentImage5") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "judgment4", row.judgmentImage4)
        .log( "judgment5", row.judgmentImage5)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseB.image3.12of4.csv",
    row => PennController("trialB3-a",
        newTimer("trial_length.b3a", 60000)
          .start()
        ,
        getTimer("trial_length.b3a")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(96,120)
        ,
        newImage("judgmentImage5", row.judgmentImage5)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   58,    10, getImage("judgmentImage1") )
          .settings.add(   154,   10, getImage("judgmentImage2") )
          .settings.add(   250,   10, getImage("judgmentImage3") )
          .settings.add(   346,   10, getImage("judgmentImage4") )
          .settings.add(   442,   10, getImage("judgmentImage5") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "judgment4", row.judgmentImage4)
        .log( "judgment5", row.judgmentImage5)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseB.image3.34of4.csv",
    row => PennController("trialB3-b",
        newTimer("trial_length.b3b", 60000)
          .start()
        ,
        getTimer("trial_length.b3b")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(96,120)
        ,
        newImage("judgmentImage5", row.judgmentImage5)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   58,    10, getImage("judgmentImage1") )
          .settings.add(   154,   10, getImage("judgmentImage2") )
          .settings.add(   250,   10, getImage("judgmentImage3") )
          .settings.add(   346,   10, getImage("judgmentImage4") )
          .settings.add(   442,   10, getImage("judgmentImage5") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "judgment4", row.judgmentImage4)
        .log( "judgment5", row.judgmentImage5)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseC.image3.csv",
    row => PennController("trialC3",
        newTimer("trial_length.c3", 60000)
          .start()
        ,
        getTimer("trial_length.c3")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(96,120)
        ,
        newImage("judgmentImage5", row.judgmentImage5)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   58,    10, getImage("judgmentImage1") )
          .settings.add(   154,   10, getImage("judgmentImage2") )
          .settings.add(   250,   10, getImage("judgmentImage3") )
          .settings.add(   346,   10, getImage("judgmentImage4") )
          .settings.add(   442,   10, getImage("judgmentImage5") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "judgment4", row.judgmentImage4)
        .log( "judgment5", row.judgmentImage5)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseD.image3.csv",
    row => PennController("trialD3",
        newTimer("trial_length.d3", 60000)
          .start()
        ,
        getTimer("trial_length.d3")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(96,120)
        ,
        newImage("judgmentImage5", row.judgmentImage5)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   58,    10, getImage("judgmentImage1") )
          .settings.add(   154,   10, getImage("judgmentImage2") )
          .settings.add(   250,   10, getImage("judgmentImage3") )
          .settings.add(   346,   10, getImage("judgmentImage4") )
          .settings.add(   442,   10, getImage("judgmentImage5") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "judgment4", row.judgmentImage4)
        .log( "judgment5", row.judgmentImage5)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseE.image3.csv",
    row => PennController("trialE3",
        newTimer("trial_length.e3", 60000)
          .start()
        ,
        getTimer("trial_length.e3")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(96,120)
        ,
        newImage("judgmentImage5", row.judgmentImage5)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   58,    10, getImage("judgmentImage1") )
          .settings.add(   154,   10, getImage("judgmentImage2") )
          .settings.add(   250,   10, getImage("judgmentImage3") )
          .settings.add(   346,   10, getImage("judgmentImage4") )
          .settings.add(   442,   10, getImage("judgmentImage5") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "judgment4", row.judgmentImage4)
        .log( "judgment5", row.judgmentImage5)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseA.image4.csv",
    row => PennController("trialA4",
        newTimer("trial_length.a5", 60000)
          .start()
        ,
        getTimer("trial_length.a5")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   202,  10,   getImage("judgmentImage1") )
          .settings.add(   298,  10,   getImage("judgmentImage2") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseC.image4.csv",
    row => PennController("trialC4",
        newTimer("trial_length.c5", 60000)
          .start()
        ,
        getTimer("trial_length.c5")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   202,  10,   getImage("judgmentImage1") )
          .settings.add(   298,  10,   getImage("judgmentImage2") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseD.image4.csv",
    row => PennController("trialD4",
        newTimer("trial_length.d4", 60000)
          .start()
        ,
        getTimer("trial_length.d4")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   202,  10,   getImage("judgmentImage1") )
          .settings.add(   298,  10,   getImage("judgmentImage2") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseE.image4.csv",
    row => PennController("trialE4",
        newTimer("trial_length.e4", 60000)
          .start()
        ,
        getTimer("trial_length.e4")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   202,  10,   getImage("judgmentImage1") )
          .settings.add(   298,  10,   getImage("judgmentImage2") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseA.image5.csv",
    row => PennController("trialA5",
        newTimer("trial_length.a5", 60000)
          .start()
        ,
        getTimer("trial_length.a5")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   106,  10,   getImage("judgmentImage1") )
          .settings.add(   202,  10,   getImage("judgmentImage2") )
          .settings.add(   298,  10,   getImage("judgmentImage3") )
          .settings.add(   394,  10,   getImage("judgmentImage4") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "judgment4", row.judgmentImage4)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseC.image5.csv",
    row => PennController("trialC5",
        newTimer("trial_length.c5", 60000)
          .start()
        ,
        getTimer("trial_length.c5")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   106,  10,   getImage("judgmentImage1") )
          .settings.add(   202,  10,   getImage("judgmentImage2") )
          .settings.add(   298,  10,   getImage("judgmentImage3") )
          .settings.add(   394,  10,   getImage("judgmentImage4") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "judgment4", row.judgmentImage4)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseD.image5.csv",
    row => PennController("trialD5",
        newTimer("trial_length.d5", 60000)
          .start()
        ,
        getTimer("trial_length.d5")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   106,  10,   getImage("judgmentImage1") )
          .settings.add(   202,  10,   getImage("judgmentImage2") )
          .settings.add(   298,  10,   getImage("judgmentImage3") )
          .settings.add(   394,  10,   getImage("judgmentImage4") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "judgment4", row.judgmentImage4)
        .log( "target response", row.TargetResponse)
  );
PennController.Template("premiseE.image5.csv",
    row => PennController("trialE5",
        newTimer("trial_length.e5", 60000)
          .start()
        ,
        getTimer("trial_length.e5")
            .test.ended()
            .success( end() )
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 560, 160)
          .settings.add(   30,    20, getImage("domainImage1") )
          .settings.add(   126,   20, getImage("domainImage2") )
          .settings.add(   222,   20, getImage("domainImage3") )
          .settings.add(   338,   20, getImage("domainImage4") )
          .settings.add(   434,   20, getImage("domainImage5") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .settings.log()
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "Cliquer ici pour l'indice")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .settings.log()
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220)
          .settings.add(   106,  10,   getImage("judgmentImage1") )
          .settings.add(   202,  10,   getImage("judgmentImage2") )
          .settings.add(   298,  10,   getImage("judgmentImage3") )
          .settings.add(   394,  10,   getImage("judgmentImage4") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .settings.log()
          .wait()
    )
        .log( "item type" , row.Item)
        .log( "group", row.Group)
        .log( "number" , row.Number)
        .log( "domain" , row.DomainIntro)
        .log( "premises" , row.Premises)
        .log( "domain1", row.domainImage1)
        .log( "domain2", row.domainImage2)
        .log( "domain3", row.domainImage3)
        .log( "domain4", row.domainImage4)
        .log( "domain5", row.domainImage5)
        .log( "judgment1", row.judgmentImage1)
        .log( "judgment2", row.judgmentImage2)
        .log( "judgment3", row.judgmentImage3)
        .log( "judgment4", row.judgmentImage4)
        .log( "target response", row.TargetResponse)
  );
