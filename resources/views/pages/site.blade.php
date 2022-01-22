<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title></title>
    <link href="{{mix('/css/index.css')}}" rel="stylesheet">
</head>

<body>
    @csrf
    <main>
        <div id="menu"></div>
    </main>

    <script src="{{ mix('/js/manifest.js') }}" defer></script>
    <script src="{{ mix('/js/vendor.js') }}" defer></script>
    <script src="{{ mix('/js/index.js') }}" defer></script>
</body>

</html>
