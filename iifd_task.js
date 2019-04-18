// Include this line at the top of your scripts
// See the documentation for more information:
// 		https://lab.florianschwarz.net/PennController/wiki/documentation/

// PennController.Sequence( );
          //ACTION: edit sequence of items - first six practice items in order, then shuffle through other items (randomly within), fixed across
PennController.ResetPrefix(null);
PennController.AddHost("http://web-risc.ens.fr/~rdudley/public_html/iifd/judgment/cards/");
          //ACTION: create this server
          //ACTION: make sure files can be acquired in zipped version
          //ACTION: update practice items
          //ACTION: update test items
PennController("practice1",
    newImage("practice1A.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice1B.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice1C.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice1D.png")
      .settings.size(96,120)
    ,
    newImage("practice1E.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice1F.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("domain", 596, 140) //images need to be shuffled, or no?
      .settings.add(   10,    10, getImage("practice1A.png") )
      .settings.add(   106,   10, getImage("practice1B.png") )
      .settings.add(   202,   10, getImage("practice1C.png") )
      .settings.add(   298,   10, getImage("practice1D.png") )
      .settings.add(   394,   10, getImage("practice1E.png") )
      .settings.add(   490,   10, getImage("practice1F.png") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice1domain.ogg")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "entendre l'indice")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
    newAudio("practice1clue.ogg")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("happy", "smile.png")
      .settings.size(96,96)
    ,
    newImage("sad", "frown.png")
      .settings.size(96,96)
    ,
    newCanvas("judgment", 576, 220) //images need to be shuffled, or no?
      .settings.add(   0,    10,   getImage("practice1A.png") )
      .settings.add(   96,   10,   getImage("practice1A.png") )
      .settings.add(   192,  10,   getImage("practice1A.png") )
      .settings.add(   288,  10,   getImage("practice1A.png") )
      .settings.add(   384,  10,   getImage("practice1A.png") )
      .settings.add(   480,  10,   getImage("practice1A.png") )
      .settings.add(   144,  178, getImage("happy") )
      .settings.add(   336,  178, getImage("sad") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("happy") , getImage("sad") )  //reclass as "target" and "other"
      .wait()
    ,
    newText("positive", "Good job!")   //update based on trial type, or record audio
    ,
    newText("negative", "Oops, you were wrong...")   //update based on trial type, or record audio
    ,
    getSelector("choice")
        .test.selected( getImage("target") )
        .success(
            getText("positive")
                .print()
        )
        .failure(
            getText("negative")
                .print()
        )
    ,
    newButton("next", "la prochain")
        .settings.center()
        .print()
        .wait()
);
PennController("practice2",
    newImage("practice2A.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice2B.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice2C.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice2D.png")
      .settings.size(96,120)
    ,
    newImage("practice2E.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice2F.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("domain", 596, 140) //images need to be shuffled, or no?
      .settings.add(   10,    10, getImage("practice2A.png") )
      .settings.add(   106,   10, getImage("practice2B.png") )
      .settings.add(   202,   10, getImage("practice2C.png") )
      .settings.add(   298,   10, getImage("practice2D.png") )
      .settings.add(   394,   10, getImage("practice2E.png") )
      .settings.add(   490,   10, getImage("practice2F.png") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice2domain.ogg")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "entendre l'indice")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
    newAudio("practice2clue.ogg")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("happy", "smile.png")
      .settings.size(96,96)
    ,
    newImage("sad", "frown.png")
      .settings.size(96,96)
    ,
    newCanvas("judgment", 576, 220) //images need to be shuffled, or no?
      .settings.add(   0,    10,   getImage("practice2A.png") )
      .settings.add(   96,   10,   getImage("practice2A.png") )
      .settings.add(   192,  10,   getImage("practice2A.png") )
      .settings.add(   288,  10,   getImage("practice2A.png") )
      .settings.add(   384,  10,   getImage("practice2A.png") )
      .settings.add(   480,  10,   getImage("practice2A.png") )
      .settings.add(   144,  178, getImage("happy") )
      .settings.add(   336,  178, getImage("sad") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("happy") , getImage("sad") )  //reclass as "target" and "other"
      .wait()
    ,
    newText("positive", "Good job!")   //update based on trial type, or record audio
    ,
    newText("negative", "Oops, you were wrong...")   //update based on trial type, or record audio
    ,
    getSelector("choice")
        .test.selected( getImage("target") )
        .success(
            getText("positive")
                .print()
        )
        .failure(
            getText("negative")
                .print()
        )
    ,
    newButton("next", "la prochain")
        .settings.center()
        .print()
        .wait()
);
PennController("practice3",
    newImage("practice3A.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice3B.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice3C.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice3D.png")
      .settings.size(96,120)
    ,
    newImage("practice3E.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice3F.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("domain", 596, 140) //images need to be shuffled, or no?
      .settings.add(   10,    10, getImage("practice3A.png") )
      .settings.add(   106,   10, getImage("practice3B.png") )
      .settings.add(   202,   10, getImage("practice3C.png") )
      .settings.add(   298,   10, getImage("practice3D.png") )
      .settings.add(   394,   10, getImage("practice3E.png") )
      .settings.add(   490,   10, getImage("practice3F.png") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice3domain.ogg")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "entendre l'indice")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
    newAudio("practice3clue.ogg")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("happy", "smile.png")
      .settings.size(96,96)
    ,
    newImage("sad", "frown.png")
      .settings.size(96,96)
    ,
    newCanvas("judgment", 576, 220) //images need to be shuffled, or no?
      .settings.add(   0,    10,   getImage("practice3A.png") )
      .settings.add(   96,   10,   getImage("practice3A.png") )
      .settings.add(   192,  10,   getImage("practice3A.png") )
      .settings.add(   288,  10,   getImage("practice3A.png") )
      .settings.add(   384,  10,   getImage("practice3A.png") )
      .settings.add(   480,  10,   getImage("practice3A.png") )
      .settings.add(   144,  178, getImage("happy") )
      .settings.add(   336,  178, getImage("sad") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("happy") , getImage("sad") )  //reclass as "target" and "other"
      .wait()
    ,
    newText("positive", "Good job!")   //update based on trial type, or record audio
    ,
    newText("negative", "Oops, you were wrong...")   //update based on trial type, or record audio
    ,
    getSelector("choice")
        .test.selected( getImage("target") )
        .success(
            getText("positive")
                .print()
        )
        .failure(
            getText("negative")
                .print()
        )
    ,
    newButton("next", "la prochain")
        .settings.center()
        .print()
        .wait()
);
PennController("practice4",
    newImage("practice4A.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice4B.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice4C.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice4D.png")
      .settings.size(96,120)
    ,
    newImage("practice4E.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice4F.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("domain", 596, 140) //images need to be shuffled, or no?
      .settings.add(   10,    10, getImage("practice4A.png") )
      .settings.add(   106,   10, getImage("practice4B.png") )
      .settings.add(   202,   10, getImage("practice4C.png") )
      .settings.add(   298,   10, getImage("practice4D.png") )
      .settings.add(   394,   10, getImage("practice4E.png") )
      .settings.add(   490,   10, getImage("practice4F.png") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice4domain.ogg")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "entendre l'indice")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
    newAudio("practice4clue.ogg")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("happy", "smile.png")
      .settings.size(96,96)
    ,
    newImage("sad", "frown.png")
      .settings.size(96,96)
    ,
    newCanvas("judgment", 576, 220) //images need to be shuffled, or no?
      .settings.add(   0,    10,   getImage("practice4A.png") )
      .settings.add(   96,   10,   getImage("practice4A.png") )
      .settings.add(   192,  10,   getImage("practice4A.png") )
      .settings.add(   288,  10,   getImage("practice4A.png") )
      .settings.add(   384,  10,   getImage("practice4A.png") )
      .settings.add(   480,  10,   getImage("practice4A.png") )
      .settings.add(   144,  178, getImage("happy") )
      .settings.add(   336,  178, getImage("sad") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("happy") , getImage("sad") )  //reclass as "target" and "other"
      .wait()
    ,
    newText("positive", "Good job!")   //update based on trial type, or record audio
    ,
    newText("negative", "Oops, you were wrong...")   //update based on trial type, or record audio
    ,
    getSelector("choice")
        .test.selected( getImage("target") )
        .success(
            getText("positive")
                .print()
        )
        .failure(
            getText("negative")
                .print()
        )
    ,
    newButton("next", "la prochain")
        .settings.center()
        .print()
        .wait()
);
PennController("practice5",
    newImage("practice5A.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice5B.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice5C.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice5D.png")
      .settings.size(96,120)
    ,
    newImage("practice5E.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newImage("practice5F.png")
      .settings.size(96,120)
      .settings.css("border", "solid 1px black")
    ,
    newCanvas("domain", 596, 140) //images need to be shuffled, or no?
      .settings.add(   10,    10, getImage("practice5A.png") )
      .settings.add(   106,   10, getImage("practice5B.png") )
      .settings.add(   202,   10, getImage("practice5C.png") )
      .settings.add(   298,   10, getImage("practice5D.png") )
      .settings.add(   394,   10, getImage("practice5E.png") )
      .settings.add(   490,   10, getImage("practice5F.png") )
      .settings.css("border", "solid 2px black")
      .print()
    ,
    newAudio("practice5domain.ogg")
      .play() // Immediately play the audio file
      .wait()
    ,
    newButton("ready", "entendre l'indice")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
    newAudio("practice5clue.ogg")
      .play() // Immediately play the audio file
      .wait() // Wait to display images until after audio file is finished
    ,
    newImage("happy", "smile.png")
      .settings.size(96,96)
    ,
    newImage("sad", "frown.png")
      .settings.size(96,96)
    ,
    newCanvas("judgment", 576, 220) //images need to be shuffled, or no?
      .settings.add(   0,    10,   getImage("practice5A.png") )
      .settings.add(   96,   10,   getImage("practice5A.png") )
      .settings.add(   192,  10,   getImage("practice5A.png") )
      .settings.add(   288,  10,   getImage("practice5A.png") )
      .settings.add(   384,  10,   getImage("practice5A.png") )
      .settings.add(   480,  10,   getImage("practice5A.png") )
      .settings.add(   144,  178, getImage("happy") )
      .settings.add(   336,  178, getImage("sad") )
      .print()
    ,
    newSelector("choice")
      .settings.add( getImage("happy") , getImage("sad") )  //reclass as "target" and "other"
      .wait()
    ,
    newText("positive", "Good job!")   //update based on trial type, or record audio
    ,
    newText("negative", "Oops, you were wrong...")   //update based on trial type, or record audio
    ,
    getSelector("choice")
        .test.selected( getImage("target") )
        .success(
            getText("positive")
                .print()
        )
        .failure(
            getText("negative")
                .print()
        )
    ,
    newButton("next", "la prochain")
        .settings.center()
        .print()
        .wait()
);
PennController.Template("premiseA.image1.csv", //premise A - image 1
    row => PennController("trialA1",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   154,   10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   346,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseB.image1.csv", //premise B - image 1
    row => PennController("trialB1",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   58,   10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   442,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseC.image1.csv", //premise C - image 1
    row => PennController("trialC1",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   58,   10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   442,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseD.image1.csv", //premise D - image 1
    row => PennController("trialD1",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   58,   10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   442,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseE.image1.csv", //premise E - image 1
    row => PennController("trialE1",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   58,   10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   442,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseA.image2.csv", //premise A - image 2
    row => PennController("trialA2",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   58,   10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   442,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseB.image2.csv", //premise B - image 2
    row => PennController("trialB2",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   58,   10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   442,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseC.image2.csv", //premise C - image 2
    row => PennController("trialC2",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   58,   10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   442,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseD.image2.csv", //premise D - image 2
    row => PennController("trialD2",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   58,   10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   442,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseE.image2.csv", //premise E - image 2
    row => PennController("trialE2",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   58,   10,   getImage("judgmentImage1") )
          .settings.add(   250,  10,   getImage("judgmentImage2") )
          .settings.add(   442,  10,   getImage("judgmentImage3") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseA.image3.csv", //premise A - image 3
    row => PennController("trialA3",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newImage("judgmentImage4", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newImage("judgmentImage5", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("judgmentImage1") )
          .settings.add(   106,   10, getImage("judgmentImage2") )
          .settings.add(   202,   10, getImage("judgmentImage3") )
          .settings.add(   298,   10, getImage("judgmentImage4") )
          .settings.add(   394,   10, getImage("judgmentImage5") )
          .settings.add(   490,   10, getImage("judgmentImage6") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseB.image3.csv", //premise B - image 3
    row => PennController("trialB3",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newImage("judgmentImage4", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newImage("judgmentImage5", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("judgmentImage1") )
          .settings.add(   106,   10, getImage("judgmentImage2") )
          .settings.add(   202,   10, getImage("judgmentImage3") )
          .settings.add(   298,   10, getImage("judgmentImage4") )
          .settings.add(   394,   10, getImage("judgmentImage5") )
          .settings.add(   490,   10, getImage("judgmentImage6") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseC.image3.csv", //premise C - image 3
    row => PennController("trialC3",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newImage("judgmentImage4", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newImage("judgmentImage5", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("judgmentImage1") )
          .settings.add(   106,   10, getImage("judgmentImage2") )
          .settings.add(   202,   10, getImage("judgmentImage3") )
          .settings.add(   298,   10, getImage("judgmentImage4") )
          .settings.add(   394,   10, getImage("judgmentImage5") )
          .settings.add(   490,   10, getImage("judgmentImage6") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseD.image3.csv", //premise D - image 3
    row => PennController("trialD3",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newImage("judgmentImage4", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newImage("judgmentImage5", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("judgmentImage1") )
          .settings.add(   106,   10, getImage("judgmentImage2") )
          .settings.add(   202,   10, getImage("judgmentImage3") )
          .settings.add(   298,   10, getImage("judgmentImage4") )
          .settings.add(   394,   10, getImage("judgmentImage5") )
          .settings.add(   490,   10, getImage("judgmentImage6") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseE.image3.csv", //premise E - image 3
    row => PennController("trialE3",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newImage("judgmentImage4", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newImage("judgmentImage5", row.judgmentImage3)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("judgmentImage1") )
          .settings.add(   106,   10, getImage("judgmentImage2") )
          .settings.add(   202,   10, getImage("judgmentImage3") )
          .settings.add(   298,   10, getImage("judgmentImage4") )
          .settings.add(   394,   10, getImage("judgmentImage5") )
          .settings.add(   490,   10, getImage("judgmentImage6") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseA.image4.csv", //premise A - image 4
    row => PennController("trialA4",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   202,    10, getImage("judgmentImage1") )
          .settings.add(   288,   10, getImage("judgmentImage2") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseB.image4.csv", //premise B - image 4
    row => PennController("trialB4",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   202,    10, getImage("judgmentImage1") )
          .settings.add(   288,   10, getImage("judgmentImage2") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseC.image4.csv", //premise C - image 4
    row => PennController("trialC4",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   202,    10, getImage("judgmentImage1") )
          .settings.add(   288,   10, getImage("judgmentImage2") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseD.image4.csv", //premise D - image 4
    row => PennController("trialD4",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   202,    10, getImage("judgmentImage1") )
          .settings.add(   288,   10, getImage("judgmentImage2") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseE.image4.csv", //premise E - image 4
    row => PennController("trialE4",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   202,    10, getImage("judgmentImage1") )
          .settings.add(   288,   10, getImage("judgmentImage2") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseA.image5.csv", //premise A - image 5
    row => PennController("trialA5",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   106,  10,   getImage("judgmentImage1") )
          .settings.add(   192,  10,   getImage("judgmentImage2") )
          .settings.add(   288,  10,   getImage("judgmentImage3") )
          .settings.add(   384,  10,   getImage("judgmentImage4") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseB.image5.csv", //premise B - image 5
    row => PennController("trialB5",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   106,  10,   getImage("judgmentImage1") )
          .settings.add(   192,  10,   getImage("judgmentImage2") )
          .settings.add(   288,  10,   getImage("judgmentImage3") )
          .settings.add(   384,  10,   getImage("judgmentImage4") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseC.image5.csv", //premise C - image 5
    row => PennController("trialC5",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   106,  10,   getImage("judgmentImage1") )
          .settings.add(   192,  10,   getImage("judgmentImage2") )
          .settings.add(   288,  10,   getImage("judgmentImage3") )
          .settings.add(   384,  10,   getImage("judgmentImage4") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseD.image5.csv", //premise D - image 5
    row => PennController("trialD5",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   106,  10,   getImage("judgmentImage1") )
          .settings.add(   192,  10,   getImage("judgmentImage2") )
          .settings.add(   288,  10,   getImage("judgmentImage3") )
          .settings.add(   384,  10,   getImage("judgmentImage4") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
PennController.Template("premiseE.image5.csv", //premise E - image 5
    row => PennController("trialE5",
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
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   298,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
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
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(96,120)
        ,
        newCanvas("judgment", 596, 220) //images need to be shuffled, or no?
          .settings.add(   106,  10,   getImage("judgmentImage1") )
          .settings.add(   192,  10,   getImage("judgmentImage2") )
          .settings.add(   288,  10,   getImage("judgmentImage3") )
          .settings.add(   384,  10,   getImage("judgmentImage4") )
          .settings.add(   144,  178,  getImage("happy") )
          .settings.add(   336,  178,  getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
