var initialCats = [
    {
        clickCount : 0,
        name : 'Bert',
        imgSrc : 'img/22252709_010df3379e_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/22252709',
    },
    {
        clickCount : 0,
        name : 'Charles',
        imgSrc : 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
    },
    {
        clickCount : 0,
        name : 'Denise',
        imgSrc : 'img/1413379559_412a540d29_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/1413379559'
    },
    {
        clickCount : 0,
        name : 'Kobe',
        imgSrc : 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/4154543904'
    },
]

var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);

    this.level = ko.computed(function() {
        var clickCount = this.clickCount();
        if(clickCount > 0 && clickCount <= 5) {
            return 'New Born';
        } else if(clickCount > 5 && clickCount <= 10) {
            return 'Infant';
        } else if(clickCount > 10 && clickCount <= 20) {
            return 'Teenage';
        }
    }, this);

    this.catArr = ko.observableArray([
        { name: 'Bert' },
        { name: 'Charles' },
        { name: 'Denise' }
    ]);
}

var ViewModal = function() {
    var self = this;
    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
    });
    
    this.currentCat = ko.observable(this.catList()[0]);
    
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.setCat = function(clickedCat) {
        self.currentCat(clickedCat);
    };
}

ko.applyBindings(new ViewModal());