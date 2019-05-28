// Include this line at the top of your scripts
// See the documentation for more information:
// 		https://lab.florianschwarz.net/PennController/wiki/documentation/

PennController.Sequence( "practice1", "practice2", "practice3", "practice4", "practice5", "practice6",
                  // rshuffle("trialE5",
                  //          "trialC5",
                  //          "trialD3",
                  //          "trialD1",
                  //          "trialA4",
                  //          "trialB3-b",
                  //          "trialA3",
                  //          "trialE2",
                  //          "trialA5",
                  //          "trialA1",
                  //          "trialC3",
                  //          "trialE3",
                  //          "trialE1",
                  //          "trialD5",
                  //          "trialC1",
                  //          "trialB3-a",
                  //          "trialC2",
                  //          "trialE4",
                  //          "trialD4",
                  //          "trialD2",
                  //          "trialA2",
                  //          "trialC4")
                         );
PennController.ResetPrefix(null);

//PennController.PreloadZip("https://web-risc.ens.fr/~rdudley/public_html/iifd/judgment/cards/all_resources.zip");
PennController.PreloadZip("https://web-risc.ens.fr/~rdudley/public_html/iifd/judgment/cards/zipped.zip");

//PennController.AddHost("http://web-risc.ens.fr/~rdudley/public_html/iifd/judgment/");
          //ACTION: check all canvas spacings
          //ACTION: make sure files can be acquired in zipped version
          //ACTION: make scripts
          //ACTION: record audio
          //ACTION: sew audio files together
          //ACTION: upload audio
          //ACTION: check that results file prints fine

PennController("practice1",
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
    newCanvas("domain", 596, 140) //images need to be shuffled, or no?
      .settings.add(   10,    10, getImage("practice1domainA") )
      .settings.add(   106,   10, getImage("practice1domainB") )
      .settings.add(   202,   10, getImage("practice1domainC") )
      .settings.add(   298,   10, getImage("practice1domainD") )
      .settings.add(   394,   10, getImage("practice1domainE") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice1domain", "DentistRGY_NannyYR.wav")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "ready for the clue")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
          //ACTION: change this to french
    newAudio("practice1clue", "NannyYellow.wav")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("target", "smile.png")
      .settings.size(96,96)
    ,
    newImage("other", "frown.png")
      .settings.size(96,96)
    ,
    newImage("practice1judgmentA", "NannyYellow.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("judgment", 576, 220) //images need to be shuffled, or no?
      .settings.add(   0,    10,   getImage("practice1judgmentA") )
      .settings.add(   144,  178, getImage("target") )
      .settings.add(   336,  178, getImage("other") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("target") , getImage("other") )  //reclass as "target" and "other"
      .wait()
    ,
    newAudio("positive", "practice1_feedback_positive.wav")
    ,
    newAudio("negative", "practice1_feedback_negative.wav")
    ,
    getSelector("choice")
        .test.selected( getImage("target") )
        .success(
            getAudio("positive")
                .print()
                .wait()
        )
        .failure(
            getAudio("negative")
                .print()
                .wait()
        )
    ,
    newButton("next", "another practice")
        .settings.center()
        .print()
        .wait()
);
PennController("practice2",
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
    newImage("practice2domainD", "DetectiveRed.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice2domainE", "DetectiveYellow.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("domain", 596, 140) //images need to be shuffled, or no?
      .settings.add(   10,    10, getImage("practice2domainA") )
      .settings.add(   106,   10, getImage("practice2domainB") )
      .settings.add(   202,   10, getImage("practice2domainC") )
      .settings.add(   298,   10, getImage("practice2domainD") )
      .settings.add(   394,   10, getImage("practice2domainE") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice2domain", "DetectiveRGY_DentistRY.wav")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "ready for the clue")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
          //ACTION: change this to french
    newAudio("practice2clue", "DetectiveGreen.wav")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("target", "smile.png")
      .settings.size(96,96)
    ,
    newImage("other", "frown.png")
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
    newCanvas("judgment", 576, 220) //images need to be shuffled, or no?
      .settings.add(   0,    10,  getImage("practice2judgmentA") )
      .settings.add(   96,    10,  getImage("practice2judgmentB") )
      .settings.add(   144,  178, getImage("target") )
      .settings.add(   336,  178, getImage("other") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("target") , getImage("other") )  //reclass as "target" and "other"
      .wait()
    ,
    newAudio("positive", "practice2_feedback_positive.wav")
    ,
    newAudio("negative", "practice2_feedback_negative.wav")
    ,
    getSelector("choice")
        .test.selected( getImage("target") )
        .success(
            getAudio("positive")
                .print()
                .wait()
        )
        .failure(
            getAudio("negative")
                .print()
                .wait()
        )
    ,
    newButton("next", "another practice")
        .settings.center()
        .print()
        .wait()
);
PennController("practice3",
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
    newCanvas("domain", 596, 140) //images need to be shuffled, or no?
      .settings.add(   10,    10, getImage("practice3domainA") )
      .settings.add(   106,   10, getImage("practice3domainB") )
      .settings.add(   202,   10, getImage("practice3domainC") )
      .settings.add(   298,   10, getImage("practice3domainD") )
      .settings.add(   394,   10, getImage("practice3domainE") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice3domain", "ReporterBYR_FiremanGR.wav")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "ready for the clue")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
          //ACTION: change this to french
    newAudio("practice3clue", "ReporterRed.wav")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("target", "smile.png")
      .settings.size(96,96)
    ,
    newImage("other", "frown.png")
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
    newCanvas("judgment", 576, 220) //images need to be shuffled, or no?
      .settings.add(   0,    10,  getImage("practice3judgmentA") )
      .settings.add(   96,   10,  getImage("practice3judgmentB") )
      .settings.add(   192,  10,  getImage("practice3judgmentC") )
      .settings.add(   144,  178, getImage("target") )
      .settings.add(   336,  178, getImage("other") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("target") , getImage("other") )  //reclass as "target" and "other"
      .wait()
    ,
    newAudio("positive", "practice3_feedback_positive.wav")
    ,
    newAudio("negative", "practice3_feedback_negative.wav")
    ,
    getSelector("choice")
        .test.selected( getImage("target") )
        .success(
            getAudio("positive")
                .print()
                .wait()
        )
        .failure(
            getAudio("negative")
                .print()
                .wait()
        )
    ,
    newButton("next", "another practice")
        .settings.center()
        .print()
        .wait()
);
PennController("practice4",
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
    newCanvas("domain", 596, 140) //images need to be shuffled, or no?
      .settings.add(   10,    10, getImage("practice4domainA") )
      .settings.add(   106,   10, getImage("practice4domainB") )
      .settings.add(   202,   10, getImage("practice4domainC") )
      .settings.add(   298,   10, getImage("practice4domainD") )
      .settings.add(   394,   10, getImage("practice4domainE") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice4domain", "NannyGRB_DetectiveYB.wav")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "ready for the clue")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
          //ACTION: change this to french
    newAudio("practice4clue", "NannyOrDetective.wav")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("target", "smile.png")
      .settings.size(96,96)
    ,
    newImage("other", "frown.png")
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
    newCanvas("judgment", 576, 220) //images need to be shuffled, or no?
      .settings.add(   0,    10,  getImage("practice4judgmentA") )
      .settings.add(   96,   10,  getImage("practice4judgmentB") )
      .settings.add(   144,  178, getImage("target") )
      .settings.add(   336,  178, getImage("other") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("target") , getImage("other") )  //reclass as "target" and "other"
      .wait()
    ,
    newAudio("positive", "practice4_feedback_positive.wav")
    ,
    newAudio("negative", "practice4_feedback_negative.wav")
    ,
    getSelector("choice")
        .test.selected( getImage("target") )
        .success(
            getAudio("positive")
                .print()
                .wait()
        )
        .failure(
            getAudio("negative")
                .print()
                .wait()
        )
    ,
    newButton("next", "another practice")
        .settings.center()
        .print()
        .wait()
);
PennController("practice5",
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
    newCanvas("domain", 596, 140) //images need to be shuffled, or no?
      .settings.add(   10,    10, getImage("practice5domainA") )
      .settings.add(   106,   10, getImage("practice5domainB") )
      .settings.add(   202,   10, getImage("practice5domainC") )
      .settings.add(   298,   10, getImage("practice5domainD") )
      .settings.add(   394,   10, getImage("practice5domainE") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice5domain", "DentistYGB_FiremanRY.wav")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "ready for the clue")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
          //ACTION: change this to french
    newAudio("practice5clue", "DentistOrFireman.wav")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("target", "smile.png")
      .settings.size(96,96)
    ,
    newImage("other", "frown.png")
      .settings.size(96,96)
    ,
    newImage("practice5judgmentA", "DentistGreen.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("judgment", 576, 220) //images need to be shuffled, or no?
      .settings.add(   0,    10,  getImage("practice5judgmentA") )
      .settings.add(   144,  178, getImage("target") )
      .settings.add(   336,  178, getImage("other") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("target") , getImage("other") )  //reclass as "target" and "other"
      .wait()
    ,
    newAudio("positive", "practice5_feedback_positive.wav")
    ,
    newAudio("negative", "practice5_feedback_negative.wav")
    ,
    getSelector("choice")
        .test.selected( getImage("target") )
        .success(
            getAudio("positive")
                .print()
                .wait()
        )
        .failure(
            getAudio("negative")
                .print()
                .wait()
        )
    ,
    newButton("next", "another practice")
        .settings.center()
        .print()
        .wait()
);
PennController("practice6",
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
    newCanvas("domain", 596, 140) //images need to be shuffled, or no?
      .settings.add(   10,    10, getImage("practice6domainA") )
      .settings.add(   106,   10, getImage("practice6domainB") )
      .settings.add(   202,   10, getImage("practice6domainC") )
      .settings.add(   298,   10, getImage("practice6domainD") )
      .settings.add(   394,   10, getImage("practice6domainE") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice6domain", "ReporterGBY_NannyRB.wav")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "ready for the clue")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
          //ACTION: change this to french
    newAudio("practice6clue", "ReporterGreen_NannyRed.wav")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("target", "smile.png")
      .settings.size(96,96)
    ,
    newImage("other", "frown.png")
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
    newCanvas("judgment", 576, 220) //images need to be shuffled, or no?
      .settings.add(   0,    10,  getImage("practice6judgmentA") )
      .settings.add(   96,   10,  getImage("practice6judgmentB") )
      .settings.add(   192,  10,  getImage("practice6judgmentC") )
      .settings.add(   144,  178, getImage("target") )
      .settings.add(   336,  178, getImage("other") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("target") , getImage("other") )  //reclass as "target" and "other"
      .wait()
    ,
    newAudio("positive", "practice6_feedback_positive.wav")
    ,
    newAudio("negative", "practice6_feedback_negative.wav")
    ,
    getSelector("choice")
        .test.selected( getImage("target") )
        .success(
            getAudio("positive")
                .print()
                .wait()
        )
        .failure(
            getAudio("negative")
                .print()
                .wait()
        )
    ,
    newButton("next", "ready to start the game")
        .settings.center()
        .print()
        .wait()
);
// PennController.Template("premiseA.image1.csv", //premise A - image 1
//     row => PennController("trialA1",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   154,   10,   getImage("judgmentImage1") )
//           .settings.add(   250,  10,   getImage("judgmentImage2") )
//           .settings.add(   346,  10,   getImage("judgmentImage3") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseC.image1.csv", //premise C - image 1
//     row => PennController("trialC1",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   58,   10,   getImage("judgmentImage1") )
//           .settings.add(   250,  10,   getImage("judgmentImage2") )
//           .settings.add(   442,  10,   getImage("judgmentImage3") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseD.image1.csv", //premise D - image 1
//     row => PennController("trialD1",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   58,   10,   getImage("judgmentImage1") )
//           .settings.add(   250,  10,   getImage("judgmentImage2") )
//           .settings.add(   442,  10,   getImage("judgmentImage3") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseE.image1.csv", //premise E - image 1
//     row => PennController("trialE1",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   58,   10,   getImage("judgmentImage1") )
//           .settings.add(   250,  10,   getImage("judgmentImage2") )
//           .settings.add(   442,  10,   getImage("judgmentImage3") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseA.image2.csv", //premise A - image 2
//     row => PennController("trialA2",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   58,   10,   getImage("judgmentImage1") )
//           .settings.add(   250,  10,   getImage("judgmentImage2") )
//           .settings.add(   442,  10,   getImage("judgmentImage3") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseC.image2.csv", //premise C - image 2
//     row => PennController("trialC2",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   58,   10,   getImage("judgmentImage1") )
//           .settings.add(   250,  10,   getImage("judgmentImage2") )
//           .settings.add(   442,  10,   getImage("judgmentImage3") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseD.image2.csv", //premise D - image 2
//     row => PennController("trialD2",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   58,   10,   getImage("judgmentImage1") )
//           .settings.add(   250,  10,   getImage("judgmentImage2") )
//           .settings.add(   442,  10,   getImage("judgmentImage3") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseE.image2.csv", //premise E - image 2
//     row => PennController("trialE2",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   58,   10,   getImage("judgmentImage1") )
//           .settings.add(   250,  10,   getImage("judgmentImage2") )
//           .settings.add(   442,  10,   getImage("judgmentImage3") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseA.image3.csv", //premise A - image 3
//     row => PennController("trialA3",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage4", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage5", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("judgmentImage1") )
//           .settings.add(   106,   10, getImage("judgmentImage2") )
//           .settings.add(   202,   10, getImage("judgmentImage3") )
//           .settings.add(   298,   10, getImage("judgmentImage4") )
//           .settings.add(   394,   10, getImage("judgmentImage5") )
//           .settings.add(   490,   10, getImage("judgmentImage6") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseB.image3.12of4.csv", //premise B - image 3
//     row => PennController("trialB3-a",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage4", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage5", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("judgmentImage1") )
//           .settings.add(   106,   10, getImage("judgmentImage2") )
//           .settings.add(   202,   10, getImage("judgmentImage3") )
//           .settings.add(   298,   10, getImage("judgmentImage4") )
//           .settings.add(   394,   10, getImage("judgmentImage5") )
//           .settings.add(   490,   10, getImage("judgmentImage6") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseB.image3.34of4.csv", //premise B - image 3
//     row => PennController("trialB3-b",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage4", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage5", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("judgmentImage1") )
//           .settings.add(   106,   10, getImage("judgmentImage2") )
//           .settings.add(   202,   10, getImage("judgmentImage3") )
//           .settings.add(   298,   10, getImage("judgmentImage4") )
//           .settings.add(   394,   10, getImage("judgmentImage5") )
//           .settings.add(   490,   10, getImage("judgmentImage6") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseC.image3.csv", //premise C - image 3
//     row => PennController("trialC3",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage4", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage5", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("judgmentImage1") )
//           .settings.add(   106,   10, getImage("judgmentImage2") )
//           .settings.add(   202,   10, getImage("judgmentImage3") )
//           .settings.add(   298,   10, getImage("judgmentImage4") )
//           .settings.add(   394,   10, getImage("judgmentImage5") )
//           .settings.add(   490,   10, getImage("judgmentImage6") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseD.image3.csv", //premise D - image 3
//     row => PennController("trialD3",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage4", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage5", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("judgmentImage1") )
//           .settings.add(   106,   10, getImage("judgmentImage2") )
//           .settings.add(   202,   10, getImage("judgmentImage3") )
//           .settings.add(   298,   10, getImage("judgmentImage4") )
//           .settings.add(   394,   10, getImage("judgmentImage5") )
//           .settings.add(   490,   10, getImage("judgmentImage6") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseE.image3.csv", //premise E - image 3
//     row => PennController("trialE3",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage4", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage5", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("judgmentImage1") )
//           .settings.add(   106,   10, getImage("judgmentImage2") )
//           .settings.add(   202,   10, getImage("judgmentImage3") )
//           .settings.add(   298,   10, getImage("judgmentImage4") )
//           .settings.add(   394,   10, getImage("judgmentImage5") )
//           .settings.add(   490,   10, getImage("judgmentImage6") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseA.image4.csv", //premise A - image 4
//     row => PennController("trialA4",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   202,    10, getImage("judgmentImage1") )
//           .settings.add(   288,   10, getImage("judgmentImage2") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseC.image4.csv", //premise C - image 4
//     row => PennController("trialC4",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   202,    10, getImage("judgmentImage1") )
//           .settings.add(   288,   10, getImage("judgmentImage2") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseD.image4.csv", //premise D - image 4
//     row => PennController("trialD4",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   202,    10, getImage("judgmentImage1") )
//           .settings.add(   288,   10, getImage("judgmentImage2") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseE.image4.csv", //premise E - image 4
//     row => PennController("trialE4",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   202,    10, getImage("judgmentImage1") )
//           .settings.add(   288,   10, getImage("judgmentImage2") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseA.image5.csv", //premise A - image 5
//     row => PennController("trialA5",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage4", row.judgmentImage4)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   106,  10,   getImage("judgmentImage1") )
//           .settings.add(   192,  10,   getImage("judgmentImage2") )
//           .settings.add(   288,  10,   getImage("judgmentImage3") )
//           .settings.add(   384,  10,   getImage("judgmentImage4") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseC.image5.csv", //premise C - image 5
//     row => PennController("trialC5",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage4", row.judgmentImage4)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   106,  10,   getImage("judgmentImage1") )
//           .settings.add(   192,  10,   getImage("judgmentImage2") )
//           .settings.add(   288,  10,   getImage("judgmentImage3") )
//           .settings.add(   384,  10,   getImage("judgmentImage4") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseD.image5.csv", //premise D - image 5
//     row => PennController("trialD5",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage4", row.judgmentImage4)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   106,  10,   getImage("judgmentImage1") )
//           .settings.add(   192,  10,   getImage("judgmentImage2") )
//           .settings.add(   288,  10,   getImage("judgmentImage3") )
//           .settings.add(   384,  10,   getImage("judgmentImage4") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
// PennController.Template("premiseE.image5.csv", //premise E - image 5
//     row => PennController("trialE5",
//         newImage("domainImage1", row.domainImage1)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage2", row.domainImage2)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage3", row.domainImage3)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage5", row.domainImage5)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newImage("domainImage6", row.domainImage6)
//           .settings.size(96,120)
//           .settings.css("border", "solid 1px black")
//         ,
//         newCanvas("domain", 596, 140) //images need to be shuffled, or no?
//           .settings.add(   10,    10, getImage("domainImage1") )
//           .settings.add(   106,   10, getImage("domainImage2") )
//           .settings.add(   202,   10, getImage("domainImage3") )
//           .settings.add(   394,   10, getImage("domainImage5") )
//           .settings.add(   490,   10, getImage("domainImage6") )
//           .settings.css("border", "solid 2px black")
//           .print()
//         ,
//         newAudio("domain sentence", row.DomainIntro)
//           .play() // Immediately play the audio file
//           .wait()
//         ,
//         newButton("ready", "ready for the clue")
//             .settings.center()
//             .print()
//             .wait()
//             .remove()
//         ,
//         newAudio("test sentence", row.Premises)
//           .play() // Immediately play the audio file
//           .wait() // Wait to display images until after audio file is finished
//         ,
//         newImage("happy", "smile.png")
//           .settings.size(96,96)
//         ,
//         newImage("sad", "frown.png")
//           .settings.size(96,96)
//         ,
//         newImage("judgmentImage1", row.judgmentImage1)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage2", row.judgmentImage2)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage3", row.judgmentImage3)
//           .settings.size(96,120)
//         ,
//         newImage("judgmentImage4", row.judgmentImage4)
//           .settings.size(96,120)
//         ,
//         newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
//           .settings.add(   106,  10,   getImage("judgmentImage1") )
//           .settings.add(   192,  10,   getImage("judgmentImage2") )
//           .settings.add(   288,  10,   getImage("judgmentImage3") )
//           .settings.add(   384,  10,   getImage("judgmentImage4") )
//           .settings.add(   144,  178,  getImage("happy") )
//           .settings.add(   336,  178,  getImage("sad") )
//           .print()
//         ,
//         newSelector("choice")
//           .settings.add( getImage("happy") , getImage("sad") )
//           .wait()
//     )
//   );
