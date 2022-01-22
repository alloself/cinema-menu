<?php

namespace App\View\Components;

use App\Models\CMS\Template;
use Illuminate\View\Component;

class Block extends Component
{

    public $block;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($block)
    {
        $this->block = $block;
        $this->template = null;

        if($block->pivot)
        {
            $this->template = Template::find($block->pivot->template_id)->name;
        }
        else {
            $this->template = Template::find($block->blockable->template_id)->name;
        }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        $template = $this->template;

        return view("blocks.$template", [
            'block' => $this->block,
            'template' => $template
        ]);
    }
}
