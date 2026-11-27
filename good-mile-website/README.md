# Good Mile Inc. website

Static front end for the Good Mile public website (goodmile.org): HTML, CSS and a small JavaScript file. No build step and no dependencies.

## Brand colours

Sky Blue `#3A82C4` (logo and large elements), a darker blue `#2B6CA8` for buttons, links and small text, navy `#112B4F` for text and dark sections, and road green `#178C46` as an accent. Values are read from the logo file and are approximate until the designer confirms them. They are CSS variables at the top of `assets/css/styles.css`.

## Run it

Open `index.html` in a browser, or serve the folder:

    python3 -m http.server 8000

## Structure

    index.html              Home
    shippers.html           For shippers
    services.html           Services (refrigerated and dry van as core expertise)
    request-a-quote.html    Quote form (temperature fields appear for refrigerated equipment)
    track.html              Shipment lookup form (not indexed)
    freight-security.html   Carrier vetting standards
    carriers.html           Carrier page and inquiry form
    about.html              Company story
    verify.html             USDOT / MC details and FMCSA links
    contact.html            Contact details and form
    login.html              Shipper portal sign in (not indexed)
    privacy.html, terms.html  Legal pages (text not written yet)
    assets/css/styles.css   All styles; brand colours are CSS variables at the top
    assets/js/main.js       Mobile menu, quote form logic, form notice
    assets/img/             Logo, reversed logo, favicon

## Not done yet

- **Forms are not connected.** Quote, contact, carrier, tracking and login forms have no backend. On submit they show a notice and send nothing. The planned backend is Laravel with MySQL.
- **Photos.** Grey boxes labelled "Photo: ..." mark where real freight photography goes. Replace each `.placeholder` with an `<img>`.
- **Text in [SQUARE BRACKETS]** is waiting on the client: mailing address, authority status, bond details, privacy policy, terms.
- **Page copy is a draft** and needs client approval. The freight security page must list only the checks Good Mile actually performs.
- **MC number** (MC-69812923) is as supplied and should be rechecked against the FMCSA record.
- **Authority status** must not be shown as active until the FMCSA Licensing and Insurance record confirms it.
- **Logo on dark backgrounds** (footer) is a mock-up made from the Sky Blue logo with the tagline changed to white. Replace it with the designer's official file.
- **Track a Load and Shipper Login** are front-end pages only. Remove them from the menu if the site goes live before those features exist.
