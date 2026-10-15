import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('すべてのフィールドを入力してください');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('メッセージが送信されました');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground">お名前</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="山田太郎"
          required
          className="text-foreground"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">メールアドレス</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@email.com"
          required
          className="text-foreground"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground">メッセージ</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="お問い合わせ内容をご記入ください"
          rows={6}
          required
          className="text-foreground resize-none"
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full transition-all duration-200 active:scale-[0.98]"
      >
        {isSubmitting ? (
          '送信中...'
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            送信する
          </>
        )}
      </Button>
    </form>
  );
}

export default ContactForm;