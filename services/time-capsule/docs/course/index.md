# Course Notes

---

## Useful commands

### prisma

```bash
npx prisma studio
```

```bash
npx prisma migrate dev
```
```
🏋️  Create a migration from changes in Prisma schema, apply it to the database, trigger generators (e.g. Prisma Client)
 
Usage

  $ prisma migrate dev [options]

Options

       -h, --help   Display this help message
         --schema   Custom path to your Prisma schema
       -n, --name   Name the migration
    --create-only   Create a new migration but do not apply it
                    The migration will be empty if there are no changes in Prisma schema
  --skip-generate   Skip triggering generators (e.g. Prisma Client)
      --skip-seed   Skip triggering seed

Examples

  Create a migration from changes in Prisma schema, apply it to the database, trigger generators (e.g. Prisma Client)
  $ prisma migrate dev

  Specify a schema
  $ prisma migrate dev --schema=./schema.prisma

  Create a migration without applying it
  $ prisma migrate dev --create-only
```

---

### Links

1. https://www.prisma.io/
2. TBD