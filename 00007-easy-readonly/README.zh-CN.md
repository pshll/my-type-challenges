<!--info-header-start--><h1>实现 Readonly <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23built--in-999" alt="#built-in"/> <img src="https://img.shields.io/badge/-%23readonly-999" alt="#readonly"/> <img src="https://img.shields.io/badge/-%23object--keys-999" alt="#object-keys"/></h1><blockquote></blockquote> </p><!--info-header-end-->

> 欢迎 PR 改进翻译质量。
> 不要使用内置的`Readonly<T>`，自己实现一个。

该 `Readonly` 会接收一个 _泛型参数_，并返回一个完全一样的类型，只是所有属性都会被 `readonly` 所修饰。

也就是不可以再对该对象的属性赋值。

例如：

```ts
interface Todo {
  title: string;
  description: string;
}
const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};
todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
```
