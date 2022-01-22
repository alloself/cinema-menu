<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\CMS\Page;
use Illuminate\Http\Request;
use Jenssegers\Agent\Agent as Agent;

class PageController extends Controller
{
    public function cms()
    {
        return view('pages.cms');
    }
    public function site()
    {
        return view('pages.site');
    }
}
