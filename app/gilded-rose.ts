export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    checkQualityBounds(item) {
        if(item.quality < 50 || item.quality > 0) { return true}
    }

    updateItemQuality(item) {
        if(this.checkQualityBounds(item)) {
            if(item.sellIn > 0) {
                item.sellIn --;
                item.quality --;
                
            }  else {
                item.sellIn --;
                item.quality -= 2; 

            }
        }
    }

    updateBrieQuality(brie) {
        if(this.checkQualityBounds(brie)) {
            if(brie.sellIn > 0) {
                brie.sellIn --;
                brie.quality ++;
                
            }  else {
                brie.sellIn --;
                brie.quality += 2; 
            }
        }

    }

    updateSulfurasQuality(sulf) {
        sulf.sellIn = sulf.sellIn;
        sulf.quality = 80;
    }


    updateQuality() {
        // for (let i = 0; i < this.items.length; i++) {
        //     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        //         if (this.items[i].quality > 0) {
        //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        //                 this.items[i].quality = this.items[i].quality - 1
        //             }
        //         }
        //     } else {
        //         if (this.items[i].quality < 50) {
        //             this.items[i].quality = this.items[i].quality + 1
        //             if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        //                 if (this.items[i].sellIn < 11) {
        //                     if (this.items[i].quality < 50) {
        //                         this.items[i].quality = this.items[i].quality + 1
        //                     }
        //                 }
        //                 if (this.items[i].sellIn < 6) {
        //                     if (this.items[i].quality < 50) {
        //                         this.items[i].quality = this.items[i].quality + 1
        //                     }
        //                 }
        //             }
        //         }
        //     }
        //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        //         this.items[i].sellIn = this.items[i].sellIn - 1;
        //     }
        //     if (this.items[i].sellIn < 0) {
        //         if (this.items[i].name != 'Aged Brie') {
        //             if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        //                 if (this.items[i].quality > 0) {
        //                     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        //                         this.items[i].quality = this.items[i].quality - 1
        //                     }
        //                 }
        //             } else {
        //                 this.items[i].quality = this.items[i].quality - this.items[i].quality
        //             }
        //         } else {
        //             if (this.items[i].quality < 50) {
        //                 this.items[i].quality = this.items[i].quality + 1
        //             }
        //         }
        //     }
        // }

        for(const i of this.items) {
            if(i.name !== 'Aged Brie' && i.name !== 'Sulfuras, Hand of Ragnaros' && i.name !== 'Backstage passes to a TAFKAL80ETC concert') {
                this.updateItemQuality(i);
            } else if(i.name === 'Aged Brie') {
                this.updateBrieQuality(i);
            } else if(i.name === 'Sulfuras, Hand of Ragnaros') {
                this.updateSulfurasQuality(i);

            }

        }

        return this.items;
    }
}
