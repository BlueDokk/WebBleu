/*=============================================
 MENU PROPERTIES OBJECT
=============================================*/
var mp = {
    menu: null,
}
/*=============================================
 MENU METHODS OBJECT
=============================================*/
var mm = {
    startMenu: ()=>{
        mp.menu = document.querySelectorAll('.nav-link');
        mp.menu.forEach(function(item){
            item.addEventListener('click',(item)=>{
                mm.clearActive();
                item.target.classList.add('active');
                item.target.parentNode.classList.add('active-box');
            })
        } )
    },
    clearActive: ()=>{
        mp.menu.forEach((item)=>{
            item.classList.remove('active');
            item.parentNode.classList.remove('active-box');
        });
    },
}
/*=============================================
 ART-CATEGORIES PROPERTIES OBJECT
=============================================*/
var pac = {
    
    categories: null,
    categoryDescription: document.getElementById('category-description'),
    categoryTitle: document.getElementById('category-title')
}
/*=============================================
 ART-CATEGORIES METHODS OBJECT
=============================================*/
var mac = {
    startArtCategories: ()=>{
        pac.categoryTitle.style.textAlign = 'center';
        pac.categoryTitle.style.color = 'rgba(255,255,255,.4)';
    
        pac.categories = document.querySelectorAll('.box');
        pac.categories.forEach((category)=>{
            category.addEventListener('click',mac.getCategory)
        });
    },
    getCategory: (category)=>{
        window.scrollTo(0,pac.categoryTitle.offsetTop-120);
        pac.category = category.target.getAttribute('category');
        pac.categoryTitle.classList.add('sub-title');
        pac.categoryTitle.style.color = '#fff';
        switch(pac.category){
            case "digital":
                pac.categoryTitle.innerHTML = "Digital Art";
                pac.categoryDescription.innerHTML = "Digital Art is a creative discipline of the plastic arts, a new trend that emerged around the application of vector and rewarding programs, which includes works in which digital elements are used that are essential in the production process or in their exhibition, manifesting these works through digital media or at least technologically advanced.<br><br>Tools used by Bleu: Digital tablet Wacom Intuos, Adobe Photoshop, Computer";
                break;
            case "caricatures":
                pac.categoryTitle.innerHTML = "Caricatures";
                pac.categoryDescription.innerHTML = "A caricature is a portrait that exaggerates or distorts the physical appearance of one or more people. It is sometimes a recognizable portrait of society, to create an easily identifiable and generally humorous resemblance. It can also be allegories. His usual technique is based on collecting the most marked features of a person (lips, eyebrows, etc.) and exaggerating or simplifying them to cause humor or to represent a moral defect through the deformation of these, in which case it is a form of graphic humour.<br><br>Tools used by Bleu: Digital tablet Wacom Intuos, Adobe Photoshop, Computer";
                break;
            case "traditional":
                pac.categoryTitle.innerHTML = "Traditional Art";
                pac.categoryDescription.innerHTML = "Traditional art is that made with physical elements such as pencils, brushes, paints, oils, graphites, charcoals, etc. Its style requires more time than digital art and it's not necessary to use technological elements to carry it out.<br><br>Tools used by Bleu: Graphites and pencils";
                break;
        }

    }
}
/*=============================================
 GALLERY PROPERTIES OBJECT
=============================================*/
var pg = {
    
    galleryGroup: null,
    galleryItem: null,
    srcImage:null,
    imgGallery: null,
    bodyDOM: document.querySelector('body'),
    pathImage: null,
    pathImageModal: null,
    lightbox: null,
    modal: null
}
/*=============================================
 GALLERY METHODS OBJECT
=============================================*/
var mg = {

    startGalllery : ()=>{

        mg.createGallery();
        pg.imgGallery = document.querySelectorAll('.gallery__group li img');
        pg.imgGallery.forEach((image)=>{
            image.addEventListener('click',(image)=>{
                pg.pathImage = image.target;
                mg.getSrc(pg.pathImage);
                mg.ligthBox(pg.pathImage);
            })
        });
    },

    createGallery: ()=>{
        pg.galleryGroup = document.querySelector('.gallery__group');
        for(let i=0;i<=21;i++){
            pg.galleryGroup.appendChild(document.createElement("LI")).setAttribute('class', 'col-lg-4 col-md-3 col-sm-4');

            pg.galleryGroup.children[i].appendChild(document.createElement("IMG")).setAttribute('src',`images/gallery/min/${i}-min.jpg`); 
            pg.galleryItem = pg.galleryGroup.children[i].childNodes[0];
            pg.galleryItem.setAttribute('alt',`Image ${i}`);
        }
    },

    getSrc: (image)=>{
        pg.srcImage = image.getAttribute('src');
        pg.srcImage = pg.srcImage.replace('min/','full/');
        pg.srcImage = pg.srcImage.replace('-min','');
    },

    ligthBox: (path)=> {
    
        pg.bodyDOM.appendChild(document.createElement("DIV")).setAttribute('id', 'lightbox');
        pg.lightbox = document.getElementById('lightbox');
        pg.lightbox.style.width = '100%';
        pg.lightbox.style.height = '100%';
        pg.lightbox.style.position = 'fixed';
        pg.lightbox.style.zIndex = '10';
        pg.lightbox.style.background = 'rgba(0,0,0,.8)';
        pg.lightbox.style.top = '0';
        pg.lightbox.style.left = '0';

        pg.lightbox.appendChild(document.createElement("DIV")).setAttribute('id', 'modal');
        pg.modal = document.querySelector('#modal');
        pg.modal.innerHTML = path.outerHTML+'<div>x</div>';

        pg.modal.childNodes[0].src = pg.srcImage;

        pg.modal.style.display = 'block';
        pg.modal.style.position = 'absolute';
        pg.modal.firstChild.style.width = '100%';
        pg.modal.firstChild.style.border = '15px solid #FFF';

        if(window.matchMedia('(max-width:1000px)').matches){
            pg.modal.style.width = '80%';
            pg.modal.firstChild.style.border = '10px solid #FFF';
        }else if((window.matchMedia('(min-width:1001px)').matches)&&(window.matchMedia('(max-width:1400px)').matches)){
            pg.modal.style.width = '50%';
        }else{
            pg.modal.style.width = '30%';
        }

        // MODAL EFFECT
        pg.modal.style.top = 0;
        pg.modal.style.left = '50%';
        pg.modal.style.transform =  'translate(-50%, -50%)';
        pg.modal.style.webkitTransform = 'translate(-50%, -50%)';

        setTimeout(()=>{
            pg.modal.style.transition = '.6s top ease';
            pg.modal.style.top = '50%';
            pg.modal.style.left = '50%';
            pg.modal.style.transform =  'translate(-50%, -50%)';
            pg.modal.style.webkitTransform = 'translate(-50%, -50%)';
        },50)


        pg.modal.childNodes[1].style.position = 'absolute';
        pg.modal.childNodes[1].style.right = '5px';
        pg.modal.childNodes[1].style.top = '5px';
        pg.modal.childNodes[1].style.color = 'silver';
        pg.modal.childNodes[1].style.cursor = 'pointer';
        pg.modal.childNodes[1].style.fontSize = '30px';
        pg.modal.childNodes[1].style.width = '40px';
        pg.modal.childNodes[1].style.height = '40px';
        pg.modal.childNodes[1].style.textAlign = 'center';
        pg.modal.childNodes[1].style.background = '#FFF';
        pg.modal.childNodes[1].style.boderRadius = '0px 0px 0px 5px';

        pg.modal.childNodes[1].addEventListener('click',()=>pg.lightbox.remove());
        pg.lightbox.addEventListener('click',()=>pg.lightbox.remove());

    },

}

// Starts initial methods
mm.startMenu();
mac.startArtCategories();
mg.startGalllery();