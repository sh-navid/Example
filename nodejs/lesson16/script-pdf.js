//Node 14.15.1 LTS
//Convert to PDF

//npm install phantom
//yarn add phantom

const phantom = require('phantom');   

phantom.create().then((ph)=> {
    ph.createPage().then((page)=> {
        page.open("http://www.google.com").then((status)=> {
            page.render('nodejs/data/pdf/output.pdf').then(()=> {
                console.log('Page Rendered');
                ph.exit();
            });
        });
    });
});