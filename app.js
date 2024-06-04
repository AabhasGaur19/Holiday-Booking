const images = document.getElementsByClassName("slider-img");

let i = 0;

setInterval(function () {
    for (var j = 0; j < images.length; j++) {
        images[j].style.display = 'none'
    }
    images[i].style.display = 'block';
    i = (i + 1) % images.length;
}, 2000);

var textTyped = false;

function typeText() {
    if (textTyped) {
        return; 
    }
    var textElement = document.querySelector('.hero-section-title');
    var targetText = 'Wonderful experience';

    var index = 0;
    var typingInterval = setInterval(function() {
        var currentText = textElement.innerHTML + targetText[index];
        textElement.innerHTML = currentText;
        index++;
        if (index >= targetText.length) {
            clearInterval(typingInterval);
            textTyped = true;
        }
    }, 300); 
}
typeText();


function addData() {
    const form = document.getElementById("contact-form")
    var name = document.getElementById("name").value
    name = name.trim()
    var email = document.getElementById("email").value
    email = email.trim()
    var phone = document.getElementById("phone").value
    phone = phone.trim()
    var query = document.getElementById("query").value
    query = query.trim()

    var newData = {
        name: name,
        phone: phone,
        email: email,
        query: query
    }

    var existingData = localStorage.getItem('formData');

    var formData = (existingData != null) ? JSON.parse(existingData) : [];

    formData.push(newData)

    var updatedData = JSON.stringify(formData);

    localStorage.setItem('formData', updatedData);

    alert('Form data stored successfully!');
    return false;
}

function downloadData() {
    var existingData = localStorage.getItem('formData');

    var formData = (existingData != null) ? JSON.parse(existingData) : [];

    const dataArray = formData.map(item => Object.values(item));
    const csv = dataArray.map(row => row.join(',')).join('\n');
    
    const dataURI = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    window.open(dataURI);
}

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();

    var nameReg = /^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}$/;
    var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneReg = /^\+[0-9]{2}[0-9]{10}$/;

    if (!nameReg.test(name)) {
        alert("Name not in correct format");
        return false;
    }

    if (!emailReg.test(email)) {
        alert("Email not in correct format");
        return false;
    }

    if (!phoneReg.test(phone)) {
        alert("Phone no. not in correct format");
        return false;
    }

    console.log("Form submitted successfully!");

    addData()

    document.getElementById("contact-form").reset()
});

function display(n) {
    var data = localStorage.getItem("formData")

    if (data != null) {
        data = JSON.parse(data)
        if (n === "all") {
            for (var i = 0; i < data.length; i++) {
                console.log("Name :: ", data[i].name)
                console.log("Phone :: ", data[i].phone)
                console.log("Email :: ", data[i].email)
                console.log("Query :: \n", data[i].query)
                console.log("\n")
            }
        }
        else {
            var limit = Math.min(n, data.length)
            for (var i = 0; i < limit; i++) {
                console.log("Name :: ", data[i].name)
                console.log("Phone :: ", data[i].phone)
                console.log("Email :: ", data[i].email)
                console.log("Query :: \n", data[i].query)
                console.log("\n")
            }
        }
    }
    else {
        console.log("No data")
    }
}


var button = document.getElementsByClassName('book-now')[0]; 

button.addEventListener('click', function() {
    var externalWebsiteURL = 'https://www.booking.com/'; 
    window.location.href = externalWebsiteURL;
});

var aus = document.getElementsByClassName('aus')[0]; 

aus.addEventListener('click', function() {
    var externalWebsiteURL = 'https://www.google.com/search?q=austrilia&sca_esv=fc7c61e83823ecc2&sxsrf=ACQVn09G-aBxLSQGJnX_xmP1miFWlrgjbA%3A1709082446818&ei=TofeZcu-MazbseMP8-O70AM&ved=0ahUKEwjLnYmh7MyEAxWsbWwGHfPxDjoQ4dUDCBA&uact=5&oq=austrilia&gs_lp=Egxnd3Mtd2l6LXNlcnAiCWF1c3RyaWxpYTIMECMYsQIYJxhGGPsBMgcQIxixAhgnMgcQIxixAhgnMg0QLhiABBiKBRhDGLEDMg0QABiABBiKBRhDGLEDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMg0QABiABBiKBRhDGLEDMgoQABiABBiKBRhDMhYQABixAhhGGPsBGJcFGIwFGN0E2AEDSIktUMcEWLUscAJ4AZABAJgBsAGgAakHqgEDMC43uAEDyAEA-AEBmAIJoALmB6gCEsICBxAjGLADGCfCAgoQABhHGNYEGLADwgINEAAYgAQYigUYQxiwA8ICDhAAGOQCGNYEGLAD2AEBwgITEC4YgAQYigUYQxjIAxiwA9gBAsICBxAjGOoCGCfCAhYQLhiABBiKBRhDGMgDGOoCGLQC2AECwgIWEC4YQxiABBiKBRjIAxjqAhi0AtgBAsICChAjGIAEGIoFGCfCAgoQLhiABBiKBRgnwgIEECMYJ8ICChAuGIAEGIoFGEPCAhEQLhiABBixAxiDARjHARjRA8ICCxAAGIAEGLEDGIMBwgIQEAAYgAQYigUYQxixAxiDAcICFBAAGIAEGIoFGJcFGIwFGN0E2AEDwgIQEC4YgAQYigUYQxixAxiDAcICEBAuGEMYgwEYsQMYgAQYigXCAgsQLhiABBixAxiDAcICBRAAGIAEwgIOEAAYgAQYigUYsQMYgwHCAggQABiABBixA8ICHxAuGEMYgwEYsQMYgAQYigUYlwUY3AQY3gQY4ATYAQSYAwaIBgGQBhO6BgYIARABGAm6BgYIAhABGAi6BgYIAxABGBO6BgYIBBABGBSSBwMyLjc&sclient=gws-wiz-serp'; 
    window.location.href = externalWebsiteURL;
});

var mal = document.getElementsByClassName('mal')[0]; 

mal.addEventListener('click', function() {
    var externalWebsiteURL = 'https://www.google.com/search?q=maldives&sca_esv=fc7c61e83823ecc2&sxsrf=ACQVn0_uH8b0s4xhR7WMSqGp_Mg9g68I5A%3A1709082619296&ei=-4feZbbgEeWPseMPytmIgAU&gs_ssp=eJzj4tDP1TcwKam0MGD04shNzEnJLEstBgA7ogY_&oq=mal&gs_lp=Egxnd3Mtd2l6LXNlcnAiA21hbCoCCAIyFBAuGIAEGIoFGJECGLEDGMcBGNEDMhEQLhiABBiKBRiRAhixAxiDATIIEC4YgAQYsQMyCxAuGIAEGLEDGIMBMgsQABiABBixAxiDATILEC4YgAQYsQMYgwEyCxAAGIAEGLEDGIMBMg4QABiABBiKBRixAxiDATILEAAYgAQYsQMYgwEyCBAAGIAEGLEDMiAQLhiABBiKBRiRAhixAxiDARiXBRjcBBjeBBjgBNgBAkiXGlAAWKEKcAF4AZABAJgBiwGgAYUDqgEDMC4zuAEDyAEA-AEBmAIGoAKwH6gCEsICBxAjGOoCGCfCAhQQLhiABBjjBBjpBBjqAhi0AtgBAcICFBAAGIAEGOMEGOkEGOoCGLQC2AEBwgIKECMYgAQYigUYJ8ICBBAjGCfCAgsQLhiABBiKBRiRAsICCxAAGIAEGIoFGJECwgIOEC4YgAQYigUYsQMYgwHCAhEQLhiABBixAxiDARjHARjRA8ICFhAuGIAEGBQYhwIYsQMYgwEYxwEY0QPCAgoQABiABBgUGIcCwgIFEC4YgATCAiMQLhiABBiKBRiRAhixAxjHARjRAxiXBRjcBBjeBBjgBNgBApgDCboGBggBEAEYAboGBggCEAEYFJIHBzEuMy43LTI&sclient=gws-wiz-serp'
    window.location.href = externalWebsiteURL;
});

var par = document.getElementsByClassName('par')[0]; 

par.addEventListener('click', function() {
    var externalWebsiteURL = 'https://www.google.com/search?q=paris&sca_esv=fc7c61e83823ecc2&sxsrf=ACQVn0_f5AA8UQ6hwe2kmZW3uR-P_4hYEQ%3A1709082673267&ei=MYjeZbL0D_qPseMP84qH0As&ved=0ahUKEwjy0IaN7cyEAxX6R2wGHXPFAboQ4dUDCBA&uact=5&oq=paris&gs_lp=Egxnd3Mtd2l6LXNlcnAiBXBhcmlzMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQLhhDGIAEGIoFMgsQABiABBixAxiDATIOEC4YgAQYsQMYxwEY0QMyChAAGIAEGIoFGEMyBRAAGIAEMg0QLhiABBiKBRhDGLEDMgsQABiABBixAxiDAUjpCVAAWI4JcAF4AZABAJgBiAKgAfkEqgEFMC4zLjG4AQPIAQD4AQGYAgWgApcFqAIUwgIHECMY6gIYJ8ICBxAuGOoCGCfCAhYQABgDGI8BGOUCGOoCGLQCGIwD2AEBwgIWEC4YAxiPARjlAhjqAhi0AhiMA9gBAcICChAjGIAEGIoFGCfCAgQQIxgnwgILEC4YgAQYsQMYgwHCAg4QLhiABBiKBRixAxiDAcICChAuGIAEGIoFGCfCAgoQLhiABBiKBRhDwgITEC4YgAQYigUYQxjHARivARiYBcICEBAuGIAEGIoFGEMYsQMYgwHCAhcQLhiABBiKBRiXBRjcBBjeBBjfBNgBAsICCxAAGIAEGIoFGJIDwgIIEC4YyQMYgATCAhkQLhiABBiKBRhDGMcBGK8BGJgFGJ4FGJkFwgIIEAAYgAQYsQOYAwi6BgYIARABGAu6BgYIAhABGBSSBwUxLjMuMQ&sclient=gws-wiz-serp'
    window.location.href = externalWebsiteURL;
});

var dub = document.getElementsByClassName('dub')[0]; 

dub.addEventListener('click', function() {
    var externalWebsiteURL = 'https://www.google.com/search?q=dubai&sca_esv=fc7c61e83823ecc2&sxsrf=ACQVn0_f5AA8UQ6hwe2kmZW3uR-P_4hYEQ%3A1709082673267&ei=MYjeZbL0D_qPseMP84qH0As&ved=0ahUKEwjy0IaN7cyEAxX6R2wGHXPFAboQ4dUDCBA&uact=5&oq=paris&gs_lp=Egxnd3Mtd2l6LXNlcnAiBXBhcmlzMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQLhhDGIAEGIoFMgsQABiABBixAxiDATIOEC4YgAQYsQMYxwEY0QMyChAAGIAEGIoFGEMyBRAAGIAEMg0QLhiABBiKBRhDGLEDMgsQABiABBixAxiDAUjpCVAAWI4JcAF4AZABAJgBiAKgAfkEqgEFMC4zLjG4AQPIAQD4AQGYAgWgApcFqAIUwgIHECMY6gIYJ8ICBxAuGOoCGCfCAhYQABgDGI8BGOUCGOoCGLQCGIwD2AEBwgIWEC4YAxiPARjlAhjqAhi0AhiMA9gBAcICChAjGIAEGIoFGCfCAgQQIxgnwgILEC4YgAQYsQMYgwHCAg4QLhiABBiKBRixAxiDAcICChAuGIAEGIoFGCfCAgoQLhiABBiKBRhDwgITEC4YgAQYigUYQxjHARivARiYBcICEBAuGIAEGIoFGEMYsQMYgwHCAhcQLhiABBiKBRiXBRjcBBjeBBjfBNgBAsICCxAAGIAEGIoFGJIDwgIIEC4YyQMYgATCAhkQLhiABBiKBRhDGMcBGK8BGJgFGJ4FGJkFwgIIEAAYgAQYsQOYAwi6BgYIARABGAu6BgYIAhABGBSSBwUxLjMuMQ&sclient=gws-wiz-serp'
    window.location.href = externalWebsiteURL;
});

var ind = document.getElementsByClassName('ind')[0]; 

ind.addEventListener('click', function() {
    var externalWebsiteURL = "https://www.google.com/search?q=india&oq=indi&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGEMYgwEYsQMYgAQYigUyBggCEEUYQDIGCAMQRRg5MgYIBBBFGD0yBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQc5MjlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    window.location.href = externalWebsiteURL;
});

var ita = document.getElementsByClassName('ita')[0]; 

ita.addEventListener('click', function() {
    var externalWebsiteURL = "https://www.google.com/search?q=italy&sca_esv=fc7c61e83823ecc2&sxsrf=ACQVn0_mlpxlz07XYMbb4Jyksbbmwcxxdg%3A1709083157476&ei=FYreZZrWHK34seMPubuEsAI&ved=0ahUKEwjatPjz7syEAxUtfGwGHbkdASYQ4dUDCBA&uact=5&oq=italy&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWl0YWx5MhAQLhiABBiKBRhDGLEDGIMBMg0QABiABBiKBRhDGLEDMg0QABiABBiKBRhDGLEDMhAQABiABBiKBRhDGLEDGIMBMggQABiABBixAzIKEAAYgAQYigUYQzINEAAYgAQYigUYQxixAzIFEAAYgAQyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATIfEC4YgAQYigUYQxixAxiDARiXBRjcBBjeBBjgBNgBAkiHFFAAWOcRcAF4AZABAJgBhwGgAfAEqgEDMC41uAEDyAEA-AEBmAIGoAKXBagCEsICBxAjGOoCGCfCAgcQLhjqAhgnwgIWEC4YgAQYigUYQxjIAxjqAhi0AtgBAcICFhAuGEMYgAQYigUYyAMY6gIYtALYAQHCAgoQIxiABBiKBRgnwgIEECMYJ8ICChAuGIAEGIoFGEPCAgoQLhhDGIAEGIoFwgIZEC4YgAQYigUYQxiXBRjcBBjeBBjgBNgBAsICFhAuGEMYgwEYxwEYsQMY0QMYgAQYigXCAhMQLhiABBiKBRhDGLEDGIMBGNQCwgIQEC4YQxiDARixAxiABBiKBcICHxAuGEMYgwEYsQMYgAQYigUYlwUY3AQY3gQY4ATYAQKYAwq6BgYIARABGAi6BgYIAhABGBSSBwMxLjU&sclient=gws-wiz-serp"
    window.location.href = externalWebsiteURL;
});

var ire = document.getElementsByClassName('ire')[0]; 

ire.addEventListener('click', function() {
    var externalWebsiteURL = "https://www.google.com/search?q=ireland&sca_esv=fc7c61e83823ecc2&sxsrf=ACQVn09FQTdopsm-t8ggR6SWPYNCFsQX_w%3A1709083137291&ei=AYreZcCyEdueseMPoayd2AM&gs_ssp=eJzj4tTP1TcwNCpPTzJg9GLPLErNScxLAQA6xgYT&oq=irelan&gs_lp=Egxnd3Mtd2l6LXNlcnAiBmlyZWxhbioCCAAyEBAuGIAEGIoFGEMYsQMYgwEyDRAAGIAEGIoFGEMYsQMyDRAAGIAEGIoFGEMYsQMyDRAAGIAEGBQYhwIYsQMyCxAAGIAEGLEDGIMBMg0QABiABBiKBRhDGLEDMgoQABiABBiKBRhDMgoQABiABBgUGIcCMg0QABiABBiKBRhDGLEDMhAQABiABBiKBRhDGLEDGIMBMh8QLhiABBiKBRhDGLEDGIMBGJcFGNwEGN4EGOAE2AECSNMaUABYixBwAXgBkAEAmAGtAqAB7AiqAQcwLjQuMS4xuAEByAEA-AEBmAIIoALHEqgCEsICBxAjGOoCGCfCAgcQLhjqAhgnwgIWEC4YgAQYigUYQxjIAxjqAhi0AtgBAcICFhAuGEMYgAQYigUYyAMY6gIYtALYAQHCAgoQIxiABBiKBRgnwgIKEC4YQxiABBiKBcICERAuGIAEGLEDGIMBGMcBGNEDwgIKEC4YgAQYigUYQ8ICGRAuGEMYgAQYigUYlwUY3AQY3gQY4ATYAQLCAhAQABiABBgUGIcCGLEDGIMBwgINEC4YgAQYigUYQxixA8ICCBAAGIAEGLEDwgIgEC4YgAQYsQMYgwEYxwEY0QMYlwUY3AQY3gQY4ATYAQLCAhYQLhgUGIMBGMcBGIcCGLEDGNEDGIAEmAMJugYGCAEQARgIugYGCAIQARgUkgcLMS40LjEuMS43LTE&sclient=gws-wiz-serp"
    window.location.href = externalWebsiteURL;
});

var ist = document.getElementsByClassName('ist')[0]; 

ist.addEventListener('click', function() {
    var externalWebsiteURL = "https://www.google.com/search?q=istanbul&sca_esv=fc7c61e83823ecc2&sxsrf=ACQVn08uWI5PJK4X7ToPDBzlVuybksfirQ%3A1709083316036&ei=tIreZe3rAamnseMP-qyMqAM&ved=0ahUKEwjtlca_78yEAxWpU2wGHXoWAzUQ4dUDCBA&uact=5&oq=istanbul&gs_lp=Egxnd3Mtd2l6LXNlcnAiCGlzdGFuYnVsMhAQLhhDGIMBGLEDGIAEGIoFMgoQABiABBiKBRhDMg0QABiABBiKBRhDGLEDMhYQLhiABBiKBRhDGLEDGIMBGMcBGK8BMggQABiABBixAzIFEAAYgAQyCBAAGIAEGLEDMggQABiABBixAzILEC4YrwEYxwEYgAQyCBAAGIAEGLEDMh8QLhhDGIMBGLEDGIAEGIoFGJcFGNwEGN4EGOAE2AECSMUdUABY0hpwAngBkAEAmAHkAaABogqqAQUwLjcuMrgBA8gBAPgBAZgCC6AC2wqoAg_CAgcQIxjqAhgnwgIHEC4Y6gIYJ8ICFhAuGIAEGIoFGEMYyAMY6gIYtALYAQHCAhYQLhhDGIAEGIoFGMgDGOoCGLQC2AEBwgIKECMYgAQYigUYJ8ICChAuGIAEGIoFGCfCAgoQLhiABBiKBRhDwgILEAAYgAQYsQMYgwHCAgQQIxgnwgIQEC4YgAQYigUYQxixAxiDAcICEBAAGIAEGIoFGEMYsQMYgwHCAhEQLhiABBixAxiDARjHARjRA8ICBRAuGIAEwgIHEAAYgAQYCsICBxAuGIAEGArCAgsQLhiABBjHARivAcICHxAuGIAEGIoFGEMYsQMYgwEYlwUY3AQY3gQY4ATYAQLCAhEQLhiDARivARjHARixAxiABJgDCroGBggBEAEYCLoGBggCEAEYFJIHBTIuNy4y&sclient=gws-wiz-serp"
    window.location.href = externalWebsiteURL;
});
