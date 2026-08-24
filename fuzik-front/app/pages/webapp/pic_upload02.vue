<template>
    <div>
        <label>Upload File</label>
        <br />
        <input type="file" @change="onChangeFile" />
        <br />
        <br />
        <button  @click="onSubmit">Submit</button>
    </div>
</template>

<script setup lang="ts">
const file = ref<File | null>(null);

const onChangeFile = (event: Event) => {
    const [_file] = (event.target as HTMLInputElement).files as FileList;

    file.value = _file;
};

const onSubmit = async () => {
    try {
        if (!file.value) return;

        const body = new FormData();
        body.append('file',file.value, file.value.name);

        await $fetch('/api/upload', {
            method: 'post',
            body
        })


    } catch (err) {
        console.log(err);
        alert('Error');
    }
}

definePageMeta ({
    layout: "empty"
})
</script>

<style scoped>

</style>