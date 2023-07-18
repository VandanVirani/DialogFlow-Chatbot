const express = require('express');
const app = express();
const axion = require('axios');
const { await, Consolo, cons } = require('pos/lexicon');
var autocorrect = require('autocorrect')()


var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'qubicleintern@gmail.com',
    pass: 'sbgjzqxkzqevnvfm'
  }
});

//////////////////////////////////////////////

//ai = 0,5,6
// web = 1,2,3
//backend = 3
// datascience = 4
const courses = [
    {
        'title':'AI - The New Era',
        'description':'Join us on this enlightening journey and unlock the power of AI in shaping the future!',
        'link':'https://qubicleai-institute.com/courses/ai-the-new-era/',
        'imageLink':"https://qubicleai-institute.com/wp-content/uploads/2023/05/ai-new-era.webp"
    },
    {
        'title':'Mastering React: Building Modern Web Applications',
        'description':"You'll learn the core concepts of React\nJoin us on this exciting journey and let's dive into React!",
        'link':'https://qubicleai-institute.com/courses/mastering-react-building-modern-web-applications/',
        'imageLink':"https://qubicleai-institute.com/wp-content/uploads/2023/05/0S2oGmon8xrcPwq6heTRyh3DayYVh6e2ftTjGuDA.jpg"
    },
    {
        'title':'Web Development Express: HTML, CSS, and JavaScript Crash Course',
        'description':"Skill Level: Beginner\nOnline course with concise video lectures and hands-on exercises",
        'link':'https://qubicleai-institute.com/courses/web-development-express-html-css-and-javascript-crash-course/',
        'imageLink':"https://qubicleai-institute.com/wp-content/uploads/2023/05/0_M4bxiCIjcTK-2Xr6.jpg"
    },
    {
      'title':'Node.js Essentials: Building Web Applications with JavaScript',
      'description':"Master Node.js and build powerful web applications with JavaScript in this comprehensive course.",
      'link':'https://qubicleai-institute.com/courses/node-js-essentials-building-web-applications-with-javascript/',
      'imageLink':"https://qubicleai-institute.com/wp-content/uploads/2023/06/Best-Way-to-Learn-NodeJS-A-Complete-Roadmap.png"
    },
    {
      'title':'Comprehensive Data Science Masterclass',
      'description':"Embark on a comprehensive data science journey, from beginner to advanced, and unleash the power of data with valuable insights",
      'link':'https://qubicleai-institute.com/courses/comprehensive-data-science-masterclass/',
      'imageLink':"https://qubicleai-institute.com/wp-content/uploads/2023/06/data-science-course.webp"
    },
    {
      'title':'Mastering ChatGPT: Effective Strategies for Conversational AI',
      'description':"Unlock the full potential of ChatGPT and Master ChatGPT and unleash the power of conversational AI in this comprehensive course.",
      'link':'https://qubicleai-institute.com/courses/mastering-chatgpt-effective-strategies-for-conversational-ai/',
      'imageLink':"https://qubicleai-institute.com/wp-content/uploads/2023/06/Gpt-Course.webp"
    },
    {
      'title':'Python Programming for Beginners',
      'description':"Python programming to beginners, providing hands-on exercises and practical examples to enhance ability to write Python programs.",
      'link':'https://qubicleai-institute.com/courses/python-programming-for-beginners/',
      'imageLink':"https://qubicleai-institute.com/wp-content/uploads/2023/06/Python-course.webp"
    }
]

    
const courseMessage = function(data,temp){
    if(temp=="all"){
      return {
        "platform": "kommunicate",
        "metadata": {
          "contentType": "300",
          "templateId": "10",
          "payload": [
            {
             
              "title": `${data[0].title}`,
              
              "header": {
                "overlayText": "₹150",
                "imgSrc": `${data[0].imageLink}`,
                "imgWidth": "500",
                "imgHeight": "500"
              },
              "description": `${data[0].description}`,
              "titleExt": "4.7/5",
              "buttons": [
                {
                  "name": "Check Out Course",
                  "action": {
                    "type": "link",
                    "payload": {
                      "url": `${data[0].link}`,
                    }
                  }
                },
              ] 
            },
            {
              "title": `${data[1].title}`,
              "header": {
                "overlayText": "Free",
                "imgSrc": `${data[1].imageLink}`,
                "imgWidth": "500",
                "imgHeight": "500"
              },
              "description": `${data[1].description}`,
              "titleExt": "4.3/5",
              "buttons": [
                {
                  "name": "Check Out Course",
                  "action": {
                    "type": "link",
                    "payload": {
                      "url": `${data[1].link}`,
                    }
                  }
                },
              ]
            },
            {
              "title": `${data[2].title}`,
              
              "header": {
                "overlayText": "Free",
                "imgSrc": `${data[2].imageLink}`,
                "imgWidth": "500",
                "imgHeight": "500"
              },
              "description":  `${data[2].description}`,
              "titleExt": "4.2/5",
              "buttons": [
                {
                  "name": "Check Out Course",
                  "action": {
                    "type": "link",
                    "payload": {
                      "url": `${data[2].link}`,
                    }
                  }
                },
              ]
            },
            {
              "title": `${data[3].title}`,
              
              "header": {
                "overlayText": "Free",
                "imgSrc": `${data[3].imageLink}`,
                "imgWidth": "500",
                "imgHeight": "500"
              },
              "description":  `${data[3].description}`,
              "titleExt": "4.2/5",
              "buttons": [
                {
                  "name": "Check Out Course",
                  "action": {
                    "type": "link",
                    "payload": {
                      "url": `${data[3].link}`,
                    }
                  }
                },
              ]
            }
          ]
        }
      }
    }
    else if(temp=="web"){
      return {
        "platform": "kommunicate",
        "metadata": {
          "contentType": "300",
          "templateId": "10",
          "payload": [
            {
              "title": `${data[1].title}`,
              "header": {
                "overlayText": "Free",
                "imgSrc": `${data[1].imageLink}`,
                "imgWidth": "500",
                "imgHeight": "500"
              },
              "description": `${data[1].description}`,
              "titleExt": "4.3/5",
              "buttons": [
                {
                  "name": "Check Out Course",
                  "action": {
                    "type": "link",
                    "payload": {
                      "url": `${data[1].link}`,
                    }
                  }
                },
              ]
            },
            {
              "title": `${data[2].title}`,
              
              "header": {
                "overlayText": "Free",
                "imgSrc": `${data[2].imageLink}`,
                "imgWidth": "500",
                "imgHeight": "500"
              },
              "description":  `${data[2].description}`,
              "titleExt": "4.2/5",
              "buttons": [
                {
                  "name": "Check Out Course",
                  "action": {
                    "type": "link",
                    "payload": {
                      "url": `${data[2].link}`,
                    }
                  }
                },
              ]
            },
            {
              "title": `${data[3].title}`,
              
              "header": {
                "overlayText": "Free",
                "imgSrc": `${data[3].imageLink}`,
                "imgWidth": "500",
                "imgHeight": "500"
              },
              "description":  `${data[3].description}`,
              "titleExt": "4.2/5",
              "buttons": [
                {
                  "name": "Check Out Course",
                  "action": {
                    "type": "link",
                    "payload": {
                      "url": `${data[3].link}`,
                    }
                  }
                },
              ]
            }
          ]
        }
      }
    }
    else if(temp=="ai"){
      return {
        "platform": "kommunicate",
        "metadata": {
          "contentType": "300",
          "templateId": "10",
          "payload": [
            {
             
              "title": `${data[0].title}`,
              
              "header": {
                "overlayText": "₹999",
                "imgSrc": `${data[0].imageLink}`,
                "imgWidth": "500",
                "imgHeight": "500"
              },
              "description": `${data[0].description}`,
              "titleExt": "4.7/5",
              "buttons": [
                {
                  "name": "Check Out Course",
                  "action": {
                    "type": "link",
                    "payload": {
                      "url": `${data[0].link}`,
                    }
                  }
                },
              ] 
            },
            {
             
              "title": `${data[6].title}`,
              
              "header": {
                "overlayText": "Free",
                "imgSrc": `${data[6].imageLink}`,
                "imgWidth": "500",
                "imgHeight": "500"
              },
              "description": `${data[6].description}`,
              "titleExt": "4.7/5",
              "buttons": [
                {
                  "name": "Check Out Course",
                  "action": {
                    "type": "link",
                    "payload": {
                      "url": `${data[6].link}`,
                    }
                  }
                },
              ] 
            },
            {
             
              "title": `${data[5].title}`,
              
              "header": {
                "overlayText": "Free",
                "imgSrc": `${data[5].imageLink}`,
                "imgWidth": "500",
                "imgHeight": "500"
              },
              "description": `${data[5].description}`,
              "titleExt": "4.7/5",
              "buttons": [
                {
                  "name": "Check Out Course",
                  "action": {
                    "type": "link",
                    "payload": {
                      "url": `${data[5].link}`,
                    }
                  }
                },
              ] 
            },
      
          ]
        }
      }
    }
    else if(temp=="bk"){
    
      return {
        "platform": "kommunicate",
        "metadata": {
          "contentType": "300",
          "templateId": "10",
          "payload": [
            {
             
              "title": `${data[3].title}`,
              
              "header": {
                "overlayText": "Free",
                "imgSrc": `${data[3].imageLink}`,
                "imgWidth": "500",
                "imgHeight": "500"
              },
              "description": `${data[3].description}`,
              "titleExt": "4.7/5",
              "buttons": [
                {
                  "name": "Check Out Course",
                  "action": {
                    "type": "link",
                    "payload": {
                      "url": `${data[3].link}`,
                    }
                  }
                },
              ] 
            },
      
          ]
        }
      }
  }
  else if(temp=="ds"){
    
    return {
      "platform": "kommunicate",
      "metadata": {
        "contentType": "300",
        "templateId": "10",
        "payload": [
          {
           
            "title": `${data[4].title}`,
            
            "header": {
              "overlayText": "₹899",
              "imgSrc": `${data[4].imageLink}`,
              "imgWidth": "500",
              "imgHeight": "500"
            },
            "description": `${data[4].description}`,
            "titleExt": "4.7/5",
            "buttons": [
              {
                "name": "Check Out Course",
                "action": {
                  "type": "link",
                  "payload": {
                    "url": `${data[4].link}`,
                  }
                }
              },
            ] 
          },
    
        ]
      }
    }
  
}

}


const formatResponseForDialogflow = (texts, sessionInfo, targetFlow, targetPage) => {
    messages = []
    texts.forEach(text => {
        messages.push(
            {
                text:{
                    text:[text],  
                    redactedText:[text]
                },
                responseType: 'HANDLER_PROMPT',
                source: 'VORTUAL_AGENT'
            },
            
  
        );
    });
    let responseData ={
        fulfillment_response: {
            messages:messages
        }
    };
  
    if (sessionInfo !== ''){
        responseData['sessionInfo'] = sessionInfo;
    }
    if (targetFlow !==''){
        responseData['targetFlow'] = targetFlow;
    }
    if (targetPage !==''){
        responseData['targetPage'] = targetPage;
    }
   
    return responseData
  };



app.get('/', (req, res)=>{
    res.send("We are live")
});


app.post('/dialogflow', express.json(), async(req, res)=>{

  
    console.log(req.body.fulfillmentInfo.tag)
    
    let tag = req.body.fulfillmentInfo.tag;
    if(tag=='helloCourse"){
        paymentRes = formatResponseForDialogflow(
        [
            '', //\n
        ],
        '',
        '',
        'projects/qubicleai-institute/locations/global/agents/7e176651-becd-49c7-9bbf-3e3820857630/flows/00000000-0000-0000-0000-000000000000/pages/041f9c78-4a0f-4b6f-a0f0-62d1782134fb
        )


  
        paymentRes.fulfillment_response.messages.push(
                          { 
                              payload: {
                "platform": "kommunicate",
                "metadata": {
                  "payload": [
                    {
                      "title": "Web development",
                      "message": "web development"
                    },
                    {
                      "message": "ai and ml",
                      "title": "AI and ML"
                    },
                    {
                      "message": "data science",
                      "title": "Data Science"
                    },
                    {
                      "title": "Backend course",
                      "message": "backend course"
                    }
                  ],
                  "contentType": "300",
                  "templateId": "6"
                }
              }
  
                
            }, 
        )  
        res.send(paymentRes)
       
       }
    if(tag=="courseAllTag"){
        
        paymentRes = formatResponseForDialogflow(
        [
            `Great! currently we have some course for you`, //\n
        ],
        '',
        '',
        'projects/qubicleai-institute/locations/global/agents/7e176651-becd-49c7-9bbf-3e3820857630/flows/00000000-0000-0000-0000-000000000000/pages/cade30a7-8abc-47aa-9c5e-214fbc35e4b1'
        
        )

        paymentRes.fulfillment_response.messages.push(
            { 
                payload: courseMessage(courses,"all")
                
            }, 
        )  
        res.send(paymentRes)
    }
    
    else if(tag=="courseWebTag"){
        
      paymentRes = formatResponseForDialogflow(
        [
            `Great! here some web development some course for you`, //\n
        ],
        '',
        '',
        'projects/qubicleai-institute/locations/global/agents/7e176651-becd-49c7-9bbf-3e3820857630/flows/00000000-0000-0000-0000-000000000000/pages/cade30a7-8abc-47aa-9c5e-214fbc35e4b1'
        
        )

        paymentRes.fulfillment_response.messages.push(
            { 
                payload: courseMessage(courses,"web")
                
            }, 
        )  
        res.send(paymentRes)
      
    }

    else if(tag=="courseAiTag"){
      
      paymentRes = formatResponseForDialogflow(
        [
            `Great! here some Ai/Ml course for you`, //\n
        ],
        '',
        '',
        'projects/qubicleai-institute/locations/global/agents/7e176651-becd-49c7-9bbf-3e3820857630/flows/00000000-0000-0000-0000-000000000000/pages/cade30a7-8abc-47aa-9c5e-214fbc35e4b1'
        

        )
        paymentRes.fulfillment_response.messages.push(
            { 
                payload: courseMessage(courses,"ai")
            }, 
        )  
        res.send(paymentRes)

    
    }

    else if(tag=="courseBackendTag"){
        paymentRes = formatResponseForDialogflow(
          [
              "Great! here some Backend course for you", 
          ],
          '',
          '',
          'projects/qubicleai-institute/locations/global/agents/7e176651-becd-49c7-9bbf-3e3820857630/flows/00000000-0000-0000-0000-000000000000/pages/cade30a7-8abc-47aa-9c5e-214fbc35e4b1'
          

          )
          paymentRes.fulfillment_response.messages.push(
              { 
                  payload: courseMessage(courses,"bk")
              }, 
          )     
          res.send(paymentRes)
    }
    
    else if(tag=="courseDSTag"){
      paymentRes = formatResponseForDialogflow(
        [
            "Great! here some Data Science course for you", 
        ],
        '',
        '',
        'projects/qubicleai-institute/locations/global/agents/7e176651-becd-49c7-9bbf-3e3820857630/flows/00000000-0000-0000-0000-000000000000/pages/cade30a7-8abc-47aa-9c5e-214fbc35e4b1'
        )
        paymentRes.fulfillment_response.messages.push(
            { 
                payload: courseMessage(courses,"ds")
            }, 
        )     
        res.send(paymentRes)  
      
    }
    
    else if(tag=="contactSubmitTag"){
      let gender = req.body.payload["formData"]['Gender']
      let message = req.body.payload["formData"]['Your Message']
      let email = req.body.payload["formData"]['Your Email']
      let name = req.body.payload["formData"]['Your Name']

      var mailOptions = {
        from: 'qubicleintern@gmail.com',
        to: 'qubicleinstitute@gmail.com', // 
        subject: 'QubicelAi Institute Querybase',
        text: `NAME : ${name}\nEMAIL : ${email}\nGENDER : ${gender}\nMESSAGE : ${message}`
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
      });
    }

    else if(tag=="questionTag"){
      
        que = req.body.sessionInfo.parameters.question
        if(que=="How do I enroll in a course?"){
            res.send( formatResponseForDialogflow(
              [
                  "To enroll in our available courses on a website, create an account, select the desired course, provide payment information (if applicable), and begin learning.", 
              ],
              '',
              '',
              'projects/qubicleai-institute/locations/global/agents/7e176651-becd-49c7-9bbf-3e3820857630/flows/00000000-0000-0000-0000-000000000000/pages/908153f2-6de3-4e28-b2ab-11f7adba14a5'
              ))

        }else if(que=="How to unenroll in course?"){
          res.send( formatResponseForDialogflow(
            [
                "To unenroll from a course, access your account, navigate to the course section, find the unenroll option, and follow the prompts to confirm.", 
            ],
            '',
            '',
            'projects/qubicleai-institute/locations/global/agents/7e176651-becd-49c7-9bbf-3e3820857630/flows/00000000-0000-0000-0000-000000000000/pages/908153f2-6de3-4e28-b2ab-11f7adba14a5'
            ))

        }else if(que=="How long does it take to complete a course?"){
          res.send( formatResponseForDialogflow(
            [
                "The duration to complete a course can vary depending on factors such as course length, complexity, individual learning pace, and time commitment, but typically it can range from a few weeks to several months.", 
            ],
            '',
            '',
            'projects/qubicleai-institute/locations/global/agents/7e176651-becd-49c7-9bbf-3e3820857630/flows/00000000-0000-0000-0000-000000000000/pages/908153f2-6de3-4e28-b2ab-11f7adba14a5'
            ))
          
        }else if(que=="any discounts or financial aid options available?"){
          res.send( formatResponseForDialogflow(
            [
                "Discounts and financial aid options may be available for certain courses. Check the course website or contact support for more information.", 
            ],
            '',
            '',
            'projects/qubicleai-institute/locations/global/agents/7e176651-becd-49c7-9bbf-3e3820857630/flows/00000000-0000-0000-0000-000000000000/pages/908153f2-6de3-4e28-b2ab-11f7adba14a5'
            ))
          
        }else if(que=="Is there a trial period for courses?"){
          res.send( formatResponseForDialogflow(
            [
                "Trial periods may be available for certain courses. Check the course website or contact support for details.", 
            ],
            '',
            '',
            'projects/qubicleai-institute/locations/global/agents/7e176651-becd-49c7-9bbf-3e3820857630/flows/00000000-0000-0000-0000-000000000000/pages/908153f2-6de3-4e28-b2ab-11f7adba14a5'
            ))
          
        }else if(que=="can I get support or ask questions from the course?"){
          res.send( formatResponseForDialogflow(
            [
                "You can seek support and ask questions during the course by contacting us through email.", 
            ],
            '',
            '',
            'projects/qubicleai-institute/locations/global/agents/7e176651-becd-49c7-9bbf-3e3820857630/flows/00000000-0000-0000-0000-000000000000/pages/908153f2-6de3-4e28-b2ab-11f7adba14a5'
            ))
          
        }
    }



})

app.listen(8888, ()=>console.log("Server is live at port 8888"));



// 1. How do I enroll in a course?",
                      
// how to unenroll in course?",
// How long does it take to complete a course?",

//  Are there any discounts or financial aid options available?",
// "5. Is there a trial period for courses?",
// How can I get support or ask questions during the course?",
