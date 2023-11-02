# Heft won't run ESM jest test

This rush monorepo contains a single package called `lib`.

It has `type: "module"` set in the package.json (meaning it interprets `.js` files as ESM).

## Reproducing the issue

Install dependencies

```sh
rush update
```

Running the build

```sh
cd packages/lib
rushx build
```

Running with jest alone

```sh
rushx jest-only        # tests run with ESM
```

Running with Heft

```sh
rushx heft-breaks      # breaks because heft somehow ignores NODE_OPTIONS=--experimental-vm-modules 
```

## Conclusion

Heft somehow ignores somehow ignores `NODE_OPTIONS=--experimental-vm-modules`, which Jest needs in order to
run ESM.
