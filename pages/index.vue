<template>
  <main>
    <div class="product">
      <div class="product-head">

        <div class="product-head__item">
          <div class="product-head__item-name">
            Selected N / M
          </div>
          <div v-if="leftItemName">
            <div 
              v-for="(item, i) in leftItemName"
              :key="i"
              class="product-head__item-content">{{ item.name }}  <span class="product-item__remove" @click="removeLeftItem(item)">x</span></div>
          </div>
        </div>

        <div class="product-head__item">
          <div class="product-head__item-name">
            Selected Item
          </div>
          <div class="product-head__item-content" v-if="rightItemName.name">{{ rightItemName.name }}</div>
        </div>

      </div>
      <div class="product-body">

        <div class="product-body__item">
          <div
            v-for="(item, i) in blockLeft"
            :key="i"
            @click="leftItem(item)"
          >
          {{ item.name }}</div>
        </div>

        <div class="product-body__item">
          <div
            v-for="(item, i) in blockRight"
            :key="i"
            @click="rightItem(item)"
          >{{ item.name }}</div>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
export default {  
  data() {
    return {
      rightItemName: {},
      leftItemName: [],
      blockLeft: [
        {
          "id": 1,
          "name": "Shoes 1"
        },
        {
          "id": 2,
          "name": "Shoes 2"
        },
        {
          "id": 3,
          "name": "Shoes 3"
        },
        {
          "id": 4,
          "name": "Shoes 4"
        },
        {
          "id": 5,
          "name": "T-shirt 1"
        },
        {
          "id": 6,
          "name": "T-shirt 2"
        },
        {
          "id": 7,
          "name": "T-shirt 3"
        },
        {
          "id": 8,
          "name": "T-shirt 4"
        }
      ],
      blockRight: [
        {
          "id": 11,
          "name": "Jacket 1"
        },
        {
          "id": 12,
          "name": "Jacket 2"
        },
        {
          "id": 13,
          "name": "Jacket 3"
        },
        {
          "id": 14,
          "name": "Jacket 4"
        },
        {
          "id": 15,
          "name": "Hoodie 1"
        },
        {
          "id": 16,
          "name": "Hoodie 2"
        },
        {
          "id": 17,
          "name": "Hoodie 3"
        },
        {
          "id": 18,
          "name": "Hoodie 4"
        }
      ],
    }
  },
  methods: {
    rightItem(item) {
      this.rightItemName = item
    },
    leftItem(item) {
      if(this.leftItemName.length < 6) {
        this.leftItemName.push(item)
      }
      console.log(this.leftItemName)
    },
    removeLeftItem(item) {
      this.leftItemName.forEach((element, index) => {
        if(element.id === item.id) {
          this.leftItemName.splice(index, 1)
        }
      });
    }
  },
}
</script>

<style lang="scss">
  .product {
    padding: 20px;
  }
  .product-head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    &__item {
      border: solid 1px;
      display: block;
      padding: 20px;
    }
    &__item-content {
      border: solid 1px;
      padding: 10px;
      margin-bottom: 5px;
      position: relative;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .product-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    justify-content: space-between;
    &__item {
      border: solid 1px;
      padding: 20px;
      div {
        border: solid 1px;
        padding: 20px;
        display: inline-block;
        margin: 10px;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          background-color: tomato;
        }
      }
    }
  }
  .product-item {
    &__remove {
      cursor: pointer;
      position: absolute;
      right: 5px;
      top: 0;
    }
  }
</style>