<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link href="{{mix('/css/index.css')}}" rel="stylesheet">
</head>

<body>
    @csrf
    <main id="menu"></main>

    <script src="{{ mix('/js/manifest.js') }}" defer></script>
    <script src="{{ mix('/js/vendor.js') }}" defer></script>
    <script src="{{ mix('/js/index.js') }}" defer></script>
</body>

</html>
