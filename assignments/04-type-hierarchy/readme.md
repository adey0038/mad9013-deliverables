# 04-type-hierarchy

Your fonts are not resizing because of the specificity.

```css
.heading--main {
  color: #36bf7f;
  --type-scale-h1: 2rem;
  font-weight: 700;
}
```

You are setting the value of the variables directly inside the class names that are on the elements.

In the media queries you are changing the value of the variable at the `:root` level only. The value in the class is always closer to the element so it never changes.

What you should have in the classes is like this:

```css
.heading--main {
  color: #36bf7f;
  font-size: var(--type-scale-h1);
  font-weight: 700;
}
```

This way you are just reading the current value of the variable.
