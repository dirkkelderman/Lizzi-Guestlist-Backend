const express = require('express');
const router  = express.Router();
module.exports = router;


const nodemailer = require("nodemailer");


module.exports = {
  templateExample: (message) => { return `<!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <title>
        
      </title>
      <!--[if !mso]><!-- -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style type="text/css">
        #outlook a { padding:0; }
        body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
        table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
        img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
        p { display:block;margin:13px 0; }
      </style>
      <!--[if mso]>
      <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <!--[if lte mso 11]>
      <style type="text/css">
        .mj-outlook-group-fix { width:100% !important; }
      </style>
      <![endif]-->
      
    <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
      <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
      </style>
    <!--<![endif]-->

  
      
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-per-50 { width:50% !important; max-width: 50%; }
    }
  </style>
  

      <style type="text/css">
      
      

  @media only screen and (max-width:480px) {
    table.mj-full-width-mobile { width: 100% !important; }
    td.mj-full-width-mobile { width: auto !important; }
  }

      </style>
      
      
    </head>
    <body style="background-color:#eeeeee;">
      
      
    <div
       style="background-color:#eeeeee;"
    >
      
    
    <!--[if mso | IE]>
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
    >
      <tr>
        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
  
    
    <div  style="margin:0px auto;max-width:600px;">
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
      >
        <tbody>
          <tr>
            <td
               style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
            >
              <!--[if mso | IE]>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
              
      <tr>
    
          <td
             class="" style="vertical-align:top;width:600px;"
          >
        <![endif]-->
          
    <div
       class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
    >
      
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
    >
      
          <tr>
            <td
               align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
            >
              
    <div
       style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#555555;"
    >This is the header</div>
  
            </td>
          </tr>
        
    </table>
  
    </div>
  
        <!--[if mso | IE]>
          </td>
        
      </tr>
    
                </table>
              <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  
    
    <!--[if mso | IE]>
        </td>
      </tr>
    </table>
    
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
    >
      <tr>
        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
  
    
    <div  style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"
      >
        <tbody>
          <tr>
            <td
               style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
            >
              <!--[if mso | IE]>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
              
      <tr>
    
          <td
             class="" style="vertical-align:top;width:300px;"
          >
        <![endif]-->
          
    <div
       class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
    >
      
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
    >
      
          <tr>
            <td
               align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
            >
              
    <div
       style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#555555;"
    ><h2>Fonds voor West</h2>
    <p>${message}</p>
    </div>
  
            </td>
          </tr>
        
    </table>
  
    </div>
  
        <!--[if mso | IE]>
          </td>
        
          <td
             class="" style="vertical-align:top;width:300px;"
          >
        <![endif]-->
          
    <div
       class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
    >
      
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
    >
      
          <tr>
            <td
               align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
            >
              
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"
    >
      <tbody>
        <tr>
          <td  style="width:200px;">
            
    <img
       height="auto" src="http://placehold.it/200x200" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="200"
    />
  
          </td>
        </tr>
      </tbody>
    </table>
  
            </td>
          </tr>
        
    </table>
  
    </div>
  
        <!--[if mso | IE]>
          </td>
        
      </tr>
    
                </table>
              <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  
    
    <!--[if mso | IE]>
        </td>
      </tr>
    </table>
    
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
    >
      <tr>
        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
  
    
    <div  style="margin:0px auto;max-width:600px;">
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
      >
        <tbody>
          <tr>
            <td
               style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
            >
              <!--[if mso | IE]>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
              
      <tr>
    
          <td
             class="" style="vertical-align:top;width:600px;"
          >
        <![endif]-->
          
    <div
       class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
    >
      
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
    >
      
          <tr>
            <td
               align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
            >
              
    <div
       style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#555555;"
    >This is the footer</div>
  
            </td>
          </tr>
        
    </table>
  
    </div>
  
        <!--[if mso | IE]>
          </td>
        
      </tr>
    
                </table>
              <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  
    
    <!--[if mso | IE]>
        </td>
      </tr>
    </table>
    <![endif]-->
  
  
    </div>
  
    </body>
  </html>`}, 
  passwordReset: (host, resetToken) => { return `
  <!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <title>
  </title>
  <!--[if !mso]><!-- -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }
  </style>
  <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
  <!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
  <style type="text/css">
    @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
  </style>
  <!--<![endif]-->
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }

      .mj-column-per-50 {
        width: 50% !important;
        max-width: 50%;
      }
    }
  </style>
  <style type="text/css">
    @media only screen and (max-width:480px) {
      table.mj-full-width-mobile {
        width: 100% !important;
      }

      td.mj-full-width-mobile {
        width: auto !important;
      }
    }
  </style>
</head>

<body style="background-color:#20111e;">
  <div style="background-color:#20111e;">
    <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#fad974;">Lizzi</div>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:black;">
                        <h2>Forgot your password?</h2>
                        <p>That's okay, we got you. Please click on the following link, or paste this into your browser to complete the process:</p>
                        

                        <a href="${host}/reset/${resetToken}">${host}/reset/${resetToken}</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                        <tbody>
                          <tr>
                            <td style="width:200px;">
                              <img height="auto" src="https://lizzi-guestlist.netlify.app/static/media/lizzilogo%20groot%20geel.c437c740.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="200" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                        <tbody>
                          <tr>
                            <td style="width:25px;">
                              <img height="auto" src="http://placehold.it/50x50" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="25" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#fad974;">Problems or questions? Please send a email to info@lizzi.app</div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#fad974;">Lizzi Guest List - Schoenerstraat 7, 1034 AS Amsterdam</div>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
  </div>
</body>

</html>
`}, 
  passwordResetConfirmation: (userEmail) => { return `
  <!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <title>
        
      </title>
      <!--[if !mso]><!-- -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style type="text/css">
        #outlook a { padding:0; }
        body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
        table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
        img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
        p { display:block;margin:13px 0; }
      </style>
      <!--[if mso]>
      <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <!--[if lte mso 11]>
      <style type="text/css">
        .mj-outlook-group-fix { width:100% !important; }
      </style>
      <![endif]-->
      
    <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
      <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
      </style>
    <!--<![endif]-->

  
      
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 { width:100% !important; max-width: 100%; }
    }
  </style>
  

      <style type="text/css">
      
      
      </style>
      
      
    </head>
    <body style="background-color:#eeeeee;">
      
      
    <div
       style="background-color:#eeeeee;"
    >
      
    
    <!--[if mso | IE]>
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
    >
      <tr>
        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
  
    
    <div  style="margin:0px auto;max-width:600px;">
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
      >
        <tbody>
          <tr>
            <td
               style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
            >
              <!--[if mso | IE]>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
              
      <tr>
    
          <td
             class="" style="vertical-align:top;width:600px;"
          >
        <![endif]-->
          
    <div
       class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
    >
      
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
    >
      
          <tr>
            <td
               align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
            >
              
    <div
       style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#555555;"
    >This is the header</div>
  
            </td>
          </tr>
        
    </table>
  
    </div>
  
        <!--[if mso | IE]>
          </td>
        
      </tr>
    
                </table>
              <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  
    
    <!--[if mso | IE]>
        </td>
      </tr>
    </table>
    
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
    >
      <tr>
        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
  
    
    <div  style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"
      >
        <tbody>
          <tr>
            <td
               style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
            >
              <!--[if mso | IE]>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
              
      <tr>
    
          <td
             class="" style="vertical-align:top;width:600px;"
          >
        <![endif]-->
          
    <div
       class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
    >
      
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
    >
      
          <tr>
            <td
               align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
            >
              
    <div
       style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#555555;"
    ><h2>Password reset confirmation</h2>
        <p>Hello,</p>
<p>
This is a confirmation that the password for your account <a href="mailto:${userEmail}">${userEmail}</a> has just been changed.</p></div>
  
            </td>
          </tr>
        
    </table>
  
    </div>
  
        <!--[if mso | IE]>
          </td>
        
      </tr>
    
                </table>
              <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  
    
    <!--[if mso | IE]>
        </td>
      </tr>
    </table>
    
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
    >
      <tr>
        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
  
    
    <div  style="margin:0px auto;max-width:600px;">
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
      >
        <tbody>
          <tr>
            <td
               style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
            >
              <!--[if mso | IE]>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
              
      <tr>
    
          <td
             class="" style="vertical-align:top;width:600px;"
          >
        <![endif]-->
          
    <div
       class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
    >
      
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
    >
      
          <tr>
            <td
               align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
            >
              
    <div
       style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#555555;"
    >This is the footer</div>
  
            </td>
          </tr>
        
    </table>
  
    </div>
  
        <!--[if mso | IE]>
          </td>
        
      </tr>
    
                </table>
              <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  
    
    <!--[if mso | IE]>
        </td>
      </tr>
    </table>
    <![endif]-->
  
  
    </div>
  
    </body>
  </html>
`},
  confirm: (id) => ({
    subject: 'Lizzi Confirm Email',
    html: `
      <a href='${process.env.CORS_ALLOWED}/confirm/${id}'>
        click to confirm email
      </a>
    `,      
    text: `Copy and paste this link: ${process.env.CORS_ALLOWED}/confirm/${id}`
  })
  

};

