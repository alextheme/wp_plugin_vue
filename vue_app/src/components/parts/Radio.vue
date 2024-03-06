<template>
    <div class="formkit-outer" data-family="box" data-type="radio" data-multiple="true" data-empty="true">
        <fieldset class="formkit-fieldset" :id="'input_' + id">
            <ul class="formkit-options">
                <li class="formkit-option" v-for="item in field.options">
                    <label class="formkit-wrapper" :data-checked="field.value === item">
                        <span class="formkit-inner">
                            <input
                                v-model="field.value"
                                class="formkit-input"
                                type="radio"
                                :name="'radio_' + id"
                                :id="'input_' + id + '-option-getting-to-work'"
                                :value="item"
                                @click="clickBtn($event)"
                            >
                        </span>
                        <span class="formkit-label">{{ item }}</span>
                    </label>
                </li>
            </ul>
        </fieldset>
    </div>
</template>

<script>
export default {
    props: {
        field: {type: Object, required: true},
        id: {type: Number, required: true}
    },
    methods: {
        clickBtn(e) {
            console.log(e)
        }
    }

}
</script>