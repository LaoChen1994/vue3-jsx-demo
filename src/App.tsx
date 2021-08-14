import { defineComponent, ref, onMounted, computed } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    let b = ref([1, 2, 3]);

    const a = computed(() => b.value.reduce((p, c) => c + p, 0));

    const add = () => {
      b.value = b.value.map((item) => (item = item + 1));
    };

    onMounted(() => {
      console.log("mounted");
    });

    return () => (
      <div>
        number: {a.value}
        <button onClick={add}>+1</button>
        {b.value.map((item) => (
          <div>{item}</div>
        ))}
        {a.value > 10 ? "恭喜你成功啦" : null}
      </div>
    );
  },
});
