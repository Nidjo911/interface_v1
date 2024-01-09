import data from "./database";

data.forEach(item => {
    console.log(`ID: ${item.id}, Value: ${item.value}, Name: ${item.name}`);
});

