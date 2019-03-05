export default {
  home: {
      headers: {
        logoPrintUrl: '/gu_logo_sv_high.png',
        level1: 'Göteborgs universitetsbibliotek',
        level2: 'Fjärrlån',
        mainHeader: 'Beställ artiklar och fjärrlån',
        langLink: 'In English',
        langTitle: 'Till den svenska versionen av sidan',
        langLinkUrl: '/index_en.html'
      },
      footer: {
        content: '© <a title="Göteborgs universitet" href="http://www.gu.se/">Göteborgs universitet</a><br>Box 100, 405 30 Göteborg<br>Tel. 031-786 0000, <a title="Kontakta oss" href="http://www.gu.se/omuniversitetet/kontakt/">Kontakta oss</a>'
      },
      orderDetails: {
        article: {
          articleTitle: 'Artikelns titel',
          journalTitle: 'Tidskriftstitel',
          authors: 'Författare',
          issn: 'ISSN',
          publicationYear: 'År',
          issue: 'Nummer',
          volume: 'Volym',
          pages: 'Sidor',
          notValidAfter: 'Ej aktuell efter',
          comment: 'Kommentar'
        },
        book: {
          bookTitle: 'Titel',
          authors: 'Författare/utgivare',
          isbn: 'ISBN',
          publicationYear: 'År',
          outsideNordics: 'Godkänn lån utanför Norden',
          notValidAfter: 'Ej aktuell efter',
          comment: 'Kommentar'
        },
        chapter: {
          chapterTitle: 'Kapiteltitel',
          bookTitle: 'Boktitel',
          authors: 'Författare/utgivare',
          isbn: 'ISBN',
          publicationYear: 'År',
          pages: 'Sidor',
          notValidAfter: 'Ej aktuell efter',
          comment: 'Kommentar'
        },
        score: {
          composers: 'Kompositör/tonsättare',
          opusTitle: 'Titel',
          publicationType: 'Publikationstyp',
          notValidAfter: 'Ej aktuell efter',
          comment: 'Kommentar'
        },
        microfilm: {
          newspaper: 'Dagstidning',
          period: 'Datum/period',
          startyear: 'Startår',
          notValidAfter: 'Ej aktuell efter',
          comment: 'Kommentar'
        }
      },
      customerDetails: {
        name: 'Namn',
        emailAddress: 'Epost',
        phoneNumber: 'Telefonnummer',
        organisation: 'Organisation/företag',
        department: 'Institution',
        unit: 'Avdelning',
        address: 'Adress',
        postalCode: 'Postnummer',
        city: 'Ort',
        libraryCardNumber: 'Lånekortsnummer',
        xAccount: 'xkonto'
      },
      deliveryDetails: {
        address: 'Gatuadress/box',
        postalCode: 'Postnummer',
        city: 'Ort',
        box: 'Box',
        comment: 'Kommentar, (tex. tillfällig adress)'
      },
      invoicingDetails: {
        name: 'Namn',
        company: 'Organisation/företag',
        address: 'Adress/box',
        postalCode: 'Postnummer',
        city: 'Ort',
        customerId: 'Beställar-ID'
      },
      step1: {
        header: 'Typ och bibliotek',
        subHeader1: "Välj vad du vill beställa och var du vill hämta",
        typeHeader: 'Typ av material',
        typePrompt: 'Välj typ',
        locationHeader: 'Bibliotek att hämta på',
        locationPrompt: 'Välj bibliotek',
        nextBtn: 'Nästa',
      },
      step2: {
        article: {
          header: 'Artikelkopia',
          price: '<strong>Priser:</strong><ul><li>En artikelkopia kostar 80 kronor.</li><li>Artikelkopior är gratis för anställda vid Göteborgs universitet.</li><li>Företag betalar 180 kronor för en artikelkopia.</li><li><a target="_blank" href="http://www.ub.gu.se/priser/koplanpriser/">Se prislista för mer information.</a></li></ul>',
          subHeader1: 'Ange PubMed ID...',
          subHeader2: '...eller fyll i uppgifterna:',
          getPubMedBtn: 'Hämta',
          pubMedError: 'Hittade ingen artikel med angivet id i PubMed.',
        },
        book: {
          header: 'Bok',
          outsideNordicsHelpText: 'Kostnad 200:- (företag 400:-, gratis för anställda vid Göteborgs universitet)',
        },
        chapter: {
          header: 'Kopia av bokkapitel',
          price: 'Kostnad: 80:- (gratis för anställda vid GU)',
        },
        score: {
          header: 'Musiktryck',
          publicationTypeHelpText: '(partitur, klaverutdrag, orkesterstämmor, etc)'
        },
        microfilm: {
          header: 'Mikrofilmad dagstidning'
        },
        header: 'Beställningsuppgifter',
        otherDetailsText: 'Övriga uppgifter om beställningen',
        mandatoryText: 'Obligatoriska fält måste fyllas i innan du kan gå vidare',
        nextBtn: 'Nästa',
        prevBtn: 'Bakåt'
      },
      step3: {
        header: 'Dina uppgifter',
        customerTypeHeader: 'Jag är...',
        customerTypeLabel: 'Kundkategori',
        customerTypePrompt: 'Välj kategori',
        customerDetailsSubheader: 'Fyll i dina uppgifter',
        xAccountHelptext: 'Om du saknar x-konto men har forskningsanknytning till Göteborgs universitet, skriv ”xx” i fältet.',
        deliveryOptionsSubheader: 'Leveransalternativ',
        deliveryMethodPrompt: 'Välj leveranssätt',
        pickupInfoText: 'Beställningen hämtas på',
        deliveryDetailsSubheader: 'Leveransuppgifter',
        invoicingDetailsSubheader: 'Faktureringsuppgifter',
        customerIdHelptext: 'Beställar-ID är ett 5- eller 7-siffrigt nummer som används av Västra Götalandsregionen vid fakturering. Om du inte har tillgång till ett beställar-ID får du istället beställa och betala som Privatperson.',
        nextBtn: 'Nästa',
        prevBtn: 'Bakåt',
        mandatoryText: 'Obligatoriska fält måste fyllas i innan du kan gå vidare'
      },
      step4: {
        header: 'Summering',
        orderDetailsSubheader: 'Beställningsuppgifter',
        yes: 'Ja',
        no: 'Nej',
        customerDetailsSubheader: 'Personuppgifter',
        deliveryOptionsSubheader: 'Leveransuppgifter',
        invoicingDetailsSubheader: 'Faktureringsuppgifter',
        shippingInfoText: 'Skickas till:',
        pickupInfoText: 'Hämtas på',
        nextBtn: 'Skicka beställning',
        prevBtn: 'Bakåt'
      },
      step5: {
        header: 'Bekräftelse',
        confirmationHeader: 'Tack för din beställning!',
        confirmationMessage: 'Din beställning är mottagen och har följande referensnummer:',
        startOver: 'Börja om med en ny beställning',
        orderAnotherArticle: 'Beställ en artikel till',
        orderAnotherBook: 'Beställ en bok till',
        orderAnotherChapter: 'Beställ en kapitelkopia till',
        orderAnotherScore: 'Beställ ett musiktryck till',
        orderAnotherMicrofilm: 'Beställ en mikrofilm till'
      },
      error: {
        errorHeader: 'Något gick fel',
        errorMessage: 'Det gick inte att genomföra din beställning. Försök igen senare.',
        back: 'Tillbaka'
      }
    },
    sfx: {
      step1: {
        header: 'Välj bibliotek'
      }
    }
};