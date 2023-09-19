const posts = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
  {
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
  },
  {
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
  },
  {
    id: 11,
    title: "et ea vero quia laudantium autem",
    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
  },
  {
    id: 12,
    title: "in quibusdam tempore odit est dolorem",
    body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
  },
  {
    id: 13,
    title: "dolorum ut in voluptas mollitia et saepe quo animi",
    body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
  },
  {
    id: 14,
    title: "voluptatem eligendi optio",
    body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
  },
  {
    id: 15,
    title: "eveniet quod temporibus",
    body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
  },
  {
    id: 16,
    title:
      "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
  },
  {
    id: 17,
    title: "fugit voluptas sed molestias voluptatem provident",
    body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
  },
  {
    id: 18,
    title: "voluptate et itaque vero tempora molestiae",
    body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
  },
  {
    id: 19,
    title: "adipisci placeat illum aut reiciendis qui",
    body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
  },
  {
    id: 20,
    title: "doloribus ad provident suscipit at",
    body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
  },
  {
    id: 21,
    title: "asperiores ea ipsam voluptatibus modi minima quia sint",
    body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt",
  },
  {
    id: 22,
    title: "dolor sint quo a velit explicabo quia nam",
    body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse",
  },
  {
    id: 23,
    title: "maxime id vitae nihil numquam",
    body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis",
  },
  {
    id: 24,
    title: "autem hic labore sunt dolores incidunt",
    body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt",
  },
  {
    id: 25,
    title: "rem alias distinctio quo quis",
    body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio",
  },
];

console.log(posts);

// 7. Naudojant posts masyvą, atlikti žemiau nurodytas užduotis ir atsakymus išvesti į konsolę. Visoms užduotis kurti funkciją ir jai, kaip parametrą, paduoti nurodytą masyvą.
// 7.1. Gauti pirmo masyvo nario reikšmę.

function task71(data) {
  if (data.length > 0) {
    return data[0];
  } else {
    return `The array is empty`;
  }
}

console.log(task71(posts));

// 7.2. Gauti paskutinio masyvo nario reikšmę.

function task72(data) {
  if (data.length > 0) {
    return data[data.length - 1];
  } else {
    return `The array is empty`;
  }
}
console.log(task72(posts));

// 7.3. Gauti 15 masyvo nario reikšmę.

function task73(data) {
  if (data.length > 0) {
    return data[14];
  } else {
    return `The array is empty`;
  }
}

console.log(task73(posts));

// 7.4. Gauti 13 masyvo nario reikšmę skaičiuojant nuo galo.
function task74(data) {
  if (data.length > 0) {
    return data[data.length - 13];
  } else {
    return `The array is empty`;
  }
}
console.log(task74(posts));

// 7.5. Gauti vidurinio masyvo nario reikšmę.
function task75(data) {
  if (data.length > 0) {
    let middle = Math.floor(data.length / 2);
    return data[middle];
  } else {
    return `The array is empty`;
  }
}

console.log(task75(posts));

// 7.6. Gauti pirmų keturių masyvo narių reikšmes.
function task76(data) {
  if (data.length > 0) {
    return data.slice(0, 4);
  } else {
    return `The array is empty`;
  }
}

console.log(task76(posts));

// 7.7. Gauti paskutinių penkių masyvo narių reikšmes.
function task77(data) {
  if (data.length > 0) {
    return data.slice(-5);
  } else {
    return `The array is empty`;
  }
}

console.log(task77(posts));

// 7.8. Gauti nuo penkto iki penkiolikto masyvo narių reikšmes.
function task78(data) {
  if (data.length > 0) {
    return data.slice(4, 15);
  } else {
    return `The array is empty`;
  }
}

console.log(task78(posts));

// 7.9. Gauti kas antro masyvo nario reikšmes.
function task79(data) {
  if (data.length > 0) {
    for (let i = 0; i < data.length; i += 2) {
      console.log(data[i]);
    }
  } else {
    console.log(`The array is empty`);
  }
}

task79(posts);

// 7.10. Gauti pirmo ir paskutinio masyvo narių reikšmes.
function task710(data) {
  console.log(task71(data));
  console.log(task72(data));
}

task710(posts);

// 7.11. Gauti pirmą masyvo narį ir į konsolę išvesti jo property "title" reikšmę.
function task711(data) {
  if (data.length > 0) {
    return data[0].title;
  } else {
    return `The array is empty`;
  }
}

console.log(task711(posts));

// 7.12. Gauti antrą masyvo narį ir į konsolę išvesti jo property "body" reikšmę.
function task712(data) {
  if (data.length > 0) {
    return data[1].body;
  } else {
    return `The array is empty`;
  }
}

console.log(task712(posts));

// 7.13. Gauti trečią masyvo narį ir į konsolę išvesti jo property "title" ir "body" reikšmes tokiu formatu: Post title is: 'post title' and the content is: 'post content'.
function task713(data) {
  if (data.length > 0) {
    let post = data[2];
    let postTitle = post.title;
    let postBody = post.body;
    let output = `Post title is: "${postTitle}" and the content is: "${postBody}"`;
    return output;
  } else {
    return `The array is empty`;
  }
}

console.log(task713(posts));

// 7.14. Išvesti visus masyvo narius į konsolę.
function task714(data) {
  if (data.length > 0) {
    data.forEach((post) => {
      console.log(post);
    });
  } else {
    console.log(`The array is empty`);
  }
}

task714(posts);

// 7.15. Išvesti visų masyvo narių property "title" į konsolę.
function task715(data) {
  if (data.length > 0) {
    data.forEach((post) => {
      console.log(post.title);
    });
  } else {
    console.log(`The array is empty`);
  }
}

task715(posts);

// 7.16. Išvesti visų masyvo narių property "body" į konsolę.
function task716(data) {
  if (data.length > 0) {
    data.forEach((post) => {
      console.log(post.body);
    });
  } else {
    console.log(`The array is empty`);
  }
}

task716(posts);

// 7.17. Išvesti visų masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function task717(data) {
  if (data.length > 0) {
    data.forEach((post) => {
      let output = `Title: "${post.title}". Content: "${post.body}" `;
      console.log(output);
    });
  } else {
    console.log(`The array is empty`);
  }
}

task717(posts);

// 7.18. Išvesti pirmų keturių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".

function task718(data) {
  if (data.length > 0) {
    let firstFourArr = task76(data);
    firstFourArr.forEach((post) => {
      let output = `Title: "${post.title}". Content: "${post.body}"`;
      console.log(output);
    });
  } else {
    console.log(`The array is empty`);
  }
}

task718(posts);

// 7.19. Išvesti paskutinių septynių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".

function task719(data) {
  if (data.length > 0) {
    let lastSevenArr = data.slice(-7);
    lastSevenArr.forEach((post) => {
      let output = `Title: "${post.title}". Content: "${post.body}"`;
      console.log(output);
    });
  } else {
    console.log(`The array is empty`);
  }
}

task719(posts);

// 7.20. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" reikšmę, kaip li elementą, išvesti į ul elementą.

function createLi(selector, post) {
  let liElement = document.createElement("li");
  liElement.textContent = post;
  let ulElement = document.querySelector(selector);
  ulElement.append(liElement);
}

function task720(data) {
  if (data.length > 0) {
    data.forEach((post) => {
      createLi("ul.ul-element720", post.title);
    });
  } else {
    console.log(`The array is empty`);
  }
}

task720(posts);

// 7.21. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" ir "body" išvesti tokiu formatu: Title: "post title". Content: "post content".

function task721(data) {
  if (data.length > 0) {
    data.forEach((post) => {
      let output = `Title: "${post.title}". Content: "${post.body}"`;
      createLi("ul.ul-element721", output);
    });
  } else {
    console.log(`The array is empty`);
  }
}

task721(posts);

// 7.22. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas prasideda raide "s".
function task722(data) {
  if (data.length > 0) {
    data.forEach((post) => {
      if (post.title.startsWith("s")) {
        let output = `Title: "${post.title}". Content: "${post.body}"`;
        createLi("ul.ul-element722", output);
      }
    });
  } else {
    console.log(`The array is empty`);
  }
}

task722(posts);

// 7.23. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas baigiasi "t" arba "m".
function task723(data) {
  if (data.length > 0) {
    data.forEach((post) => {
      if (post.title.endsWith("t") || post.title.endsWith("m")) {
        let output = `Title: "${post.title}". Content: "${post.body}"`;
        createLi("ul.ul-element723", output);
      }
    });
  } else {
    console.log(`The array is empty`);
  }
}

task723(posts);

// 7.24. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau simbolių nei 15.
function task724(data) {
  if (data.length > 0) {
    data.forEach((post) => {
      if (post.title.length > 15) {
        let output = `Title: "${post.title}". Content: "${post.body}"`;
        createLi("ul.ul-element724", output);
      }
    });
  } else {
    console.log(`The array is empty`);
  }
}

task724(posts);

// 7.25. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi mažiau simbolių nei 20 ir kurių "body" turi daugiau simbolių nei 50.
function task725(data) {
  if (data.length > 0) {
    data.forEach((post) => {
      let titleLength = post.title.length;
      let contentLength = post.body.length;
      if (titleLength > 20 && contentLength > 50) {
        let output = `Title: "${post.title}". Content: "${post.body}"`;
        createLi("ul.ul-element725", output);
      }
    });
  } else {
    console.log(`The array is empty`);
  }
}

task725(posts);

// 7.26. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi tarp 20 ir 30 simbolių ir kurių "body" turi tarp 70 ir 130 simbolių.
function task726(data) {
  if (data.length > 0) {
    data.forEach((post) => {
      let titleLength = post.title.length;
      let contentLength = post.body.length;
      if (
        titleLength > 20 &&
        titleLength < 30 &&
        contentLength > 70 &&
        contentLength < 130
      ) {
        let output = `Title: "${post.title}". Content: "${post.body}"`;
        createLi("ul.ul-element726", output);
      }
    });
  } else {
    console.log(`The array is empty`);
  }
}

task726(posts);

// 7.27. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi simbolių junginį "it", o "body" turi simbolių junginį "quo".

function task727(data) {
  if (data.length > 0) {
    data.forEach((post) => {
      if (post.title.includes("it") && post.body.includes("quo")) {
        let output = `Title: "${post.title}". Content: "${post.body}"`;
        createLi("ul.ul-element727", output);
      }
    });
  } else {
    console.log(`The array is empty`);
  }
}

task727(posts);

// 7.28. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių "body" turi žodį "sit". Jeigu žodis turi šį simbolių junginį, tačiau tai nėra pilna jo reikšmė (pvz. žodžiai "sitto" ar "quasit"), jie neturėtų būti atvaizduojami.

function task728(data) {
  if (data.length > 0) {
    data.forEach((post) => {
      let contentWords = post.body.split(" ");
      if (contentWords.includes("sit")) {
        let output = `Title: "${post.title}". Content: "${post.body}"`;
        createLi("ul.ul-element728", output);
      }
    });
  } else {
    console.log(`The array is empty`);
  }
}

task728(posts);

// 7.29. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau nei 3 "a" raides, o "body" turi mažiau nei 7 "o" raides.

function task729(data) {
  if (data.length > 0) {
    data.forEach((post) => {
      let title = post.title;
      let titleChar = title.split("a");
      let content = post.body;
      let contentChar = content.split("o");
      if (titleChar.length > 3 && contentChar.length > 7) {
        let output = `Title: "${title}". Content: "${content}"`;
        createLi("ul.ul-element729", output);
      }
    });
  } else {
    console.log(`The array is empty`);
  }
}

task729(posts);

// 7.30. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti visų masyvo narių pavadinimus surūšiuotus nuo mažiausiai iki daugiausiai raidžių "body" property turinčių narių. Papildomai, prie išvesto teksto pridėti ir "body" raidžių skaičių.

function task730(data) {
  if (data.length > 0) {
    data.sort((a, b) => a.body.length - b.body.length);
    data.forEach((post) => {
      let title = post.title;
      let content = post.body;
      let contentLength = content.length;
      let output = `Title: "${title}". Content: "${content}". Content has ${contentLength} letters`;
      createLi("ul.ul-element730", output);
    });
  } else {
    console.log(`The array is empty`);
  }
}

task730(posts);
