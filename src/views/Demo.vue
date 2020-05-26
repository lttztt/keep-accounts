<template>
    <div class="demo">
        <div class="chartNum">
            <div class="box-item">
                <li
                    v-for="(item, index) in orderNum"
                    :key="index"
                    :class="{
                        'number-item': !isNaN(item),
                    }"
                >
                    <span v-if="!isNaN(item)">
                        <i ref="numberItem">0123456789</i>
                    </span>
                    <span class="comma" v-else>{{ item }}</span>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "demo",
    data() {
        return {
            orderNum: ["0", "0", "0", "0", "0", "0", "0", "0"],
        };
    },
    mounted() {
        setTimeout(() => {
            this.toOrderNum('23213') // 这里输入数字即可调用
        }, 500);

        setTimeout(() => {
            this.toOrderNum(88632) // 这里输入数字即可调用
        }, 3500);
    },
    methods: {
        setNumberTransform() {
            const numberItems = this.$refs.numberItem;
            
            const numberArr = this.orderNum.filter((item) => !isNaN(item));
            console.log('numberArr');
            console.log(numberArr);
            
            for (let index = 0; index < numberItems.length; index++) {
                const elem = numberItems[index];
                elem.style.transform = `translate(0%, -${numberArr[index] *
                    10}%)`;
            }
        },
        toOrderNum(num) {
            num = num.toString();
            if (num.length < 9) {
                num = num.padStart(8, "0");
            } else {
                console.log("太大了");
            }

            this.orderNum = num.split("");
            console.log(this.orderNum);
            this.setNumberTransform();
        },
    },
};
</script>

<style lang="scss" scoped>
.box-item {
    height: 100px;
    font-size: 54px;
    line-height: 41px;
    color: #2d7cff;

    position: relative;
    text-align: center;
    writing-mode: vertical-lr;
    text-orientation: upright;
    // display: flex;
    // align-items: center;
    // justify-content: center;
}


.number-item {
    width: 41px;
    height: 75px;
    overflow: hidden;
    border: 1px solid rgba(221, 221, 221, 1);
    & > span {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;
        writing-mode: vertical-rl;
        text-orientation: upright;
        & > i {
            font-style: normal;
            position: absolute;
            top: 0;
            transform: translate(0, 0);
            transition: transform 1s ease-in-out;
        }
    }
}

</style>
