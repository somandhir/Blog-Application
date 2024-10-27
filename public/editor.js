const blogTitleField = document.querySelector('.title');
const articleField = document.querySelector('.article');

// Banner
const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
let bannerPath;

const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload');

bannerImage.addEventListener('change', () => {
    uploadImage(bannerImage, "banner");
});

uploadInput.addEventListener('change', () => {
    uploadImage(uploadInput, "image");
});

const uploadImage = (uploadFile, uploadType) => {
    const [file] = uploadFile.files; // Correctly access files property
    if (file && file.type.includes("image")) { // Changed 'include' to 'includes'
        const formData = new FormData();
        formData.append('image', file);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
            .then(res => {
                if (!res.ok) {
                    return res.text().then(err => { // Get error response as text
                        throw new Error(`Error: ${res.status} ${err}`);
                    });
                }
                return res.json();
            })
            .then(data => {
                if (uploadType == "image") {
                    addImage(data, file.name);
                } else {
                    bannerPath = `${location.origin}/${data}`;
                    banner.style.backgroundImage = `url("${bannerPath}")`;
                }
            })
            .catch(err => console.error("Fetch error:", err)); // Add error handling for fetch
    } else {
        console.error("Invalid file type or no file selected.");
        alert("upload image only");
    }
};

const addImage = (imagePath, alt) => {
    let curPos = articleField.selectionStart;
    let textToInsert = `\r![${alt}(${imagePath})]\r`;
    articleField.value = articleField.value.slice(0, curPos)
        + textToInsert + articleField.value.slice(curPos);
}

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

publishBtn.addEventListener('click', () => {
    if (articleField.value.length && blogTitleField.value.length) {
        // Generating id
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let blogTitle = blogTitleField.value.split(" ").join("-");
        let id = '';
        for (let i = 0; i < 4; i++) {
            id += letters[Math.floor(Math.random() * letters.length)];
        }

        // Setting up docName
        let docName = `${blogTitle}-${id}`;
        let date = new Date(); // For published at info

        // Send data to the server
        fetch('/saveBlog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: blogTitleField.value,
                article: articleField.value,
                bannerImage: bannerPath,
                publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                console.log('Blog saved:', data);
            })
            .catch(err => {
                console.error('Error saving blog:', err);
            });
    }
});
function showFullArticle(article) {
    // Logic to show a modal with the full article
    // You can create a modal element and set its content to `article`
    alert(article); // Just for demonstration
}